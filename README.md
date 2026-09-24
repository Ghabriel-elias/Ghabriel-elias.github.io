# Site do Broto

Site do app Broto em três idiomas: landing, documentos legais, ajuda e as duas
páginas transacionais que fecham cadastro e troca de senha.

Next.js com App Router, exportado como site estático (`output: "export"`) e
servido pelo GitHub Pages em **https://ghabriel-elias.github.io/broto**. Não há
servidor: o build gera HTML e o Pages entrega.

## Como rodar

```bash
npm install
npm run dev        # http://localhost:3000/broto
npm run typecheck
npm run lint
npm run build      # gera ./out
```

## Estrutura

Mesma convenção do repo do app: `src/app` só declara rotas, `src/screens` tem as
telas de verdade.

```
src/
├── app/                     rotas finas, uma por URL
│   ├── (pt)/                landing e documentos em português, na raiz
│   ├── (en)/en/             idem em inglês
│   └── (es)/es/             idem em espanhol
├── screens/
│   ├── home/                landing: index.tsx + components/ + mock/
│   ├── doc/                 documentos: uma tela para os cinco textos
│   └── auth/                confirmado e nova-senha, com seus hooks
├── components/              Topbar, Footer, LangMenu, Icons, Link
├── constants/               rotas, idiomas, chaves do Supabase
├── i18n/locales/            pt-BR, en-US, es-ES
├── services/                supabaseAuth
├── style/                   globals.css e as fontes
└── utils/                   password, authLink
```

Cada idioma é um **route group com layout próprio**, porque o `<html lang>` muda
entre eles. Trocar de idioma recarrega a página; navegar dentro do mesmo idioma
não.

## URLs

O português fica na raiz, sem prefixo. Os outros dois têm slug próprio por
documento — nada é traduzido por convenção, tudo está em
`src/constants/routes.ts`.

| documento | pt | en | es |
|---|---|---|---|
| privacidade | `/privacidade` | `/en/privacy` | `/es/privacidad` |
| termos | `/termos` | `/en/terms` | `/es/terminos` |
| reembolso | `/reembolso` | `/en/refund` | `/es/reembolso` |
| excluir conta | `/exclusao` | `/en/delete-account` | `/es/eliminar-cuenta` |
| ajuda | `/ajuda` | `/en/help` | `/es/ayuda` |

O seletor de idioma leva ao **mesmo documento** no outro idioma, então toda
página nova nasce nas três ou o seletor aponta para o nada.

## Textos

Interface e landing ficam em `src/i18n/locales/<locale>/`, nos mesmos namespaces
do app (`common`, `screens/home`, `screens/auth`). Texto com marcação usa `Trans`
com tags nomeadas:

```json
"fineprint": "A assinatura é cobrada pela loja. Detalhes em <refund>Assinatura e reembolso</refund>."
```

Os **documentos legais não são strings de i18n** — são documentos. Cada um é um
componente em `src/screens/doc/content/<locale>/`, com o texto na íntegra. Jogar
um contrato dentro de um JSON só dificultaria revisar e versionar o texto.

A landing é renderizada no servidor, então nada disso vira JavaScript no
navegador: `Trans` vem de `react-i18next/TransWithoutContext`, que não depende de
provider.

## O que não pode quebrar

`/confirmado` e `/nova-senha` são transacionais: o link do e-mail do Supabase cai
nelas. Se pararem de funcionar, ninguém confirma cadastro nem recupera senha.

São as únicas páginas com `"use client"`. Ficam fora da navegação, fora do
seletor de idioma e levam `noindex`. O idioma delas **não vem da URL** — vem do
navegador, porque o link do e-mail é sempre o mesmo para todo mundo.
`useAuthCopy` resolve isso com `useSyncExternalStore`, devolvendo `null` no
servidor para o HTML sair neutro e não dar divergência na hidratação.

`src/services/supabaseAuth.ts` fala direto com a API REST de auth, sem SDK. O
link usa `token_hash`, e **não** o código PKCE: o verificador do PKCE mora no
armazenamento do celular, então o navegador nunca conseguiria completar uma troca
iniciada pelo app. O token some da URL com `history.replaceState` assim que é
lido, para não ficar no histórico nem vazar pelo `Referer`.

A `anon key` em `src/constants/supabase.ts` é pública por definição — já vai no
bundle do app — e sozinha não abre nada: a RLS continua valendo.

## Cor e tipografia

Mesma paleta do app, **sem modo escuro** — o app é `light` fixo e o site
acompanha. As variáveis estão no topo de `src/style/globals.css`; nenhuma regra
usa hex solto.

Fraunces nos títulos, DM Sans no corpo, DM Mono em número, data e eyebrow. As
três vêm por `next/font`, self-hosted. A Fraunces precisa de `axes: ["opsz"]`:
sem o eixo óptico as letras saem mais largas e os títulos quebram de linha
diferente.

## Publicar

`git push` na `main` dispara `.github/workflows/deploy.yml`, que roda typecheck,
lint e build e publica `out/` no Pages. Em **Settings → Pages**, a origem precisa
estar em **GitHub Actions**.

`public/.nojekyll` é obrigatório: sem ele o Pages ignora `_next/` e o site sobe
sem CSS nem JavaScript.

### Domínio próprio

Um domínio próprio serve o site na raiz, então o `basePath` `/broto` deixa de
fazer sentido. Troque `BASE_PATH` em `src/constants/site.ts` para `""` antes de
apontar o DNS, e crie `public/CNAME` com o domínio numa linha só. No DNS: num
subdomínio, um `CNAME` para `ghabriel-elias.github.io`; no domínio raiz, quatro
registros `A` para `185.199.108.153`, `185.199.109.153`, `185.199.110.153` e
`185.199.111.153`. Depois marque **Enforce HTTPS**.

## Do outro lado

No app, `SITE_BASE_URL` em `src/constants/legal.ts` aponta para
https://ghabriel-elias.github.io/broto. É o único lugar a trocar se o endereço
mudar: os caminhos em `LEGAL_PATHS` continuam iguais, porque o app escolhe o
idioma sozinho a partir de `i18n.language`.

No Supabase, em **Authentication → URL Configuration**, o **Site URL** é
`https://ghabriel-elias.github.io/broto` — com o prefixo, porque os modelos de
e-mail montam o link como `{{ .SiteURL }}/confirmado`. Em **Redirect URLs**,
libere `/broto/nova-senha` e `/broto/confirmado` no mesmo host.

Em **Authentication → Email Templates**, os dois modelos precisam apontar para as
páginas certas:

```html
<a href="{{ .SiteURL }}/confirmado?token_hash={{ .TokenHash }}&type=email">Confirmar meu e-mail</a>
<a href="{{ .SiteURL }}/nova-senha?token_hash={{ .TokenHash }}&type=recovery">Criar nova senha</a>
```

Sem essa troca os modelos continuam usando `{{ .ConfirmationURL }}`, que aponta
para o Site URL e ignora as páginas. O SMTP embutido envia **2 e-mails por hora
no projeto inteiro** e não serve para produção.

Nas lojas, use a versão em português: `/privacidade` no campo de Privacy Policy,
`/exclusao` no campo de exclusão de dados do Google Play e `/ajuda` no Support
URL da Apple.
