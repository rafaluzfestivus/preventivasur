import { NextRequest, NextResponse } from "next/server";

const BASE    = process.env.CHATWOOT_BASE_URL ?? "https://chat.preventivacentro.es";
const ACCOUNT = Number(process.env.CHATWOOT_ACCOUNT_ID ?? "1");
const INBOX   = Number(process.env.CHATWOOT_INBOX_ID ?? "");
const TOKEN   = process.env.CHATWOOT_TOKEN ?? "";

const headers = {
    "Content-Type": "application/json",
    "api_access_token": TOKEN,
};

function toE164(phone: string): string {
    const digits = phone.replace(/\D/g, "");
    if (digits.startsWith("34")) return `+${digits}`;
    if (digits.startsWith("6") || digits.startsWith("7") || digits.startsWith("9")) {
        return `+34${digits}`;
    }
    return `+${digits}`;
}

export async function POST(req: NextRequest) {
    try {
        const { nombre, telefono, email, codigoPostal, servicio, mensaje } = await req.json();

        const phone = toE164(telefono);

        // Create contact in Chatwoot
        const contactRes = await fetch(`${BASE}/api/v1/accounts/${ACCOUNT}/contacts`, {
            method: "POST",
            headers,
            body: JSON.stringify({ name: nombre, email, phone_number: phone }),
        });
        const contactBody = await contactRes.json();

        let contactId: number | undefined = contactBody.payload?.contact?.id;
        if (!contactId && contactBody.attributes) {
            const searchRes = await fetch(
                `${BASE}/api/v1/accounts/${ACCOUNT}/contacts/search?q=${encodeURIComponent(phone)}&include_contacts=true`,
                { headers }
            );
            const searchBody = await searchRes.json();
            contactId = searchBody.payload?.[0]?.id;
        }

        if (!contactId) {
            console.error("[Chatwoot Centro] Could not get contact ID");
            return NextResponse.json({ error: "contact_failed" }, { status: 500 });
        }

        // Create conversation
        const convRes = await fetch(`${BASE}/api/v1/accounts/${ACCOUNT}/conversations`, {
            method: "POST",
            headers,
            body: JSON.stringify({ inbox_id: INBOX, contact_id: contactId }),
        });
        const convBody = await convRes.json();

        if (!convBody.id) {
            console.error("[Chatwoot Centro] Could not create conversation");
            return NextResponse.json({ error: "conversation_failed" }, { status: 500 });
        }

        // Send message with form details
        await fetch(`${BASE}/api/v1/accounts/${ACCOUNT}/conversations/${convBody.id}/messages`, {
            method: "POST",
            headers,
            body: JSON.stringify({
                content: `📍 CP: ${codigoPostal} | 🔧 ${servicio}\n\n${mensaje}`,
                message_type: "incoming",
            }),
        });

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("[Chatwoot Centro] route error:", err);
        return NextResponse.json({ error: "internal" }, { status: 500 });
    }
}
