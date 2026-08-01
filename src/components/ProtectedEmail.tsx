"use client";

import { useEffect, useState } from "react";

/**
 * Renders an email address that only assembles into a real mailto link
 * client-side, so simple markup scrapers scanning the static HTML for
 * "@" don't harvest it. Google and other JS-executing crawlers still see
 * the final address.
 */
export function ProtectedEmail({ user, domain, className }: { user: string; domain: string; className?: string }) {
    const [email, setEmail] = useState<string | null>(null);

    useEffect(() => {
        setEmail(`${user}@${domain}`);
    }, [user, domain]);

    if (!email) {
        return <span className={className}>{user} [at] {domain}</span>;
    }

    return (
        <a href={`mailto:${email}`} className={className}>
            {email}
        </a>
    );
}
