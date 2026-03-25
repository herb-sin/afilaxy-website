# Afilaxy Web

Portal web da Afilaxy — landing page + área para profissionais de saúde.

## Stack

- React 18 + TypeScript
- Vite 6
- Tailwind CSS 3
- React Router 6
- Stripe (checkout — placeholders por ora)
- Firebase Hosting (deploy)

## Rotas

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | Home | Landing page com hero, impacto em números, como funciona, teaser de planos, jornada, valores, download + redes sociais |
| `/profissionais` | Profissionais | Portal para médicos (PF) — plano único Afilaxy Pro, formulário com CRM |
| `/clinicas` | Clinicas | Portal para clínicas (PJ) — 3 tiers (Básico/Pro/Premium), formulário com CNPJ |
| `/profissionais/crm` | ConsultaCRM | Consulta de registro no CFM via Cloud Function |
| `/success` | Success | Confirmação pós-pagamento Stripe |
| `/privacidade` | Privacidade | Política de privacidade (LGPD) |

## Estrutura

```
src/
├── components/
│   ├── Carousel.tsx      # Carousel com lightbox e auto-play
│   ├── Footer.tsx        # Footer com 3 colunas (brand, links, social)
│   ├── Layout.tsx        # Navbar + Footer + Outlet
│   ├── Navbar.tsx        # Nav responsiva com mobile menu em estado React
│   └── PlanCard.tsx      # Card de plano reutilizável
├── pages/
│   ├── Home.tsx
│   ├── Profissionais.tsx
│   ├── ConsultaCRM.tsx
│   ├── Success.tsx
│   └── Privacidade.tsx
├── env.d.ts
├── index.css
└── main.tsx
```

## Setup

```bash
npm install
npm run dev
```

## Variáveis de ambiente

Criar `.env` na raiz:

```
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...

VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=afilaxy-app.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=afilaxy-app
VITE_FIREBASE_STORAGE_BUCKET=afilaxy-app.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

## Deploy

```bash
npm run deploy
```

Isso faz: `build` → copia `dist/` para `afilaxy-kmm/web-dist/` → `firebase deploy --only hosting`.

## Dados de impacto (fontes)

- 20 milhões de brasileiros com asma — GINA 2023
- 80% não seguem tratamento preventivo
- 2ª doença respiratória crônica mais comum no mundo
- Medicação gratuita disponível no SUS — falta adesão
