# Identidade Visual e Parâmetros - Preventiva Centro

Este documento contém os parâmetros de identidade visual e informações essenciais do projeto **Preventiva Centro** (`redes-proteccion-es`).

## 1. Identidade Visual

### Cores Principais
As cores são definidas no `globals.css` e utilizam variáveis CSS.

- **Primária (Amarelo)**:
  - HEX: `#EAB308`
  - Tailwind: `yellow-500`
  - Uso: Botões de destaque, ícones, chamadas para ação.
  - Variável CSS: `--color-primary`

- **Secundária (Vinho/Custom Wine)**:
  - HEX: `#4d2a36`
  - Uso: Elementos de fundo, rodapés, contrastes fortes.
  - Variável CSS: `--color-secondary`

- **Texto Principal (Cinza Escuro)**:
  - HEX: `#374151`
  - Tailwind: `gray-700`
  - Variável CSS: `--color-text-main`

- **Texto Claro (Cinza Claro)**:
  - HEX: `#F3F4F6`
  - Tailwind: `gray-100`
  - Variável CSS: `--color-text-light`

### Fundo (Background)
- **Modo Claro**:
  - Início: `#FFFFFF` (Branco)
  - Fim: `#F9FAFB` (Gray-50)
  - Gradiente linear de cima para baixo.

- **Modo Escuro**:
  - Preto (`#000000`).

### Tipografia
- **Fonte Principal**: `Inter` (Google Fonts).
- **Estilo**: Sans-serif, moderna, limpa.

### Logo
- **Caminho do Arquivo**: `/public/logo-preventiva-centro.png`
- **Alt Text**: "Logo Preventiva Centro"

---

## 2. Parâmetros do Projeto

### Informações de Contato
- **Telefone/WhatsApp**: `+34 637 003 793`
- **Email**: `contacto@preventivacentro.es`
- **Website**: `https://preventivacentro.es`
- **Áreas de Atuação**: Madrid, Móstoles, Leganés, Getafe, Alcorcón e Comunidade de Madrid.

### SEO e Metadados
- **Título Padrão**: "Instalación de Redes de Protección en Madrid | Preventiva Centro"
- **Descrição**: "Especialistas en instalación de redes de protección para balcones, ventanas y terrazas en Madrid y alrededores. Resistencia de 150kg/m² y 3 años de garantía."
- **Palavras-chave**: redes de protección madrid, mallas de seguridad madrid, redes para balcones madrid, redes para gatos madrid, seguridad infantil ventanas.

### Configuração Técnica
- **Framework**: Next.js 15+ (App Router).
- **Estilização**: Tailwind CSS.
- **Analytics**: Google Tag Manager (`GTM-WH6L3VQJ`), Google Ads (`AW-17944651982`).

---

## 3. Notas Adicionais
- O projeto utiliza `@tailwindcss/postcss` para processamento de CSS.
- Os ícones são fornecidos pela biblioteca `lucide-react`.
- O layout é responsivo ("mobile-first") com suporte a tema escuro (dark mode).
