# Site do Broto

Site estático em três idiomas, um HTML por página. Sem build, sem dependência.

```
web/
├── style.css                    →  /style.css   folha compartilhada
├── app.js                       →  /app.js      navegação sem recarregar
├── index.html                   →  /            landing em português
├── privacidade/                 →  /privacidade
├── termos/                      →  /termos
├── reembolso/                   →  /reembolso
├── exclusao/                    →  /exclusao
├── ajuda/                       →  /ajuda
├── en/
│   ├── index.html               →  /en          landing em inglês
│   ├── privacy/                 →  /en/privacy
│   ├── terms/                   →  /en/terms
│   ├── refund/                  →  /en/refund
│   ├── delete-account/          →  /en/delete-account
│   └── help/                    →  /en/help
└── es/
    ├── index.html               →  /es          landing em espanhol
    ├── privacidad/              →  /es/privacidad
    ├── terminos/                →  /es/terminos
    ├── reembolso/               →  /es/reembolso
    ├── eliminar-cuenta/         →  /es/eliminar-cuenta
    └── ayuda/                   →  /es/ayuda
```

A raiz de cada idioma é a **landing**: apresentação do produto, como funciona, o
card "Como confirmar", lembretes, Brotinho, o que o app não faz e os preços. Os
documentos legais ficam abaixo dela e aparecem no rodapé de toda página.

Não existe `_redirects` nem nenhuma outra configuração de servidor. A pasta com
`index.html` dentro é o que gera a URL limpa — `/termos` em vez de
`/termos.html` — e isso funciona igual no Netlify, na Vercel e no GitHub Pages.

O seletor `pt · en · es` leva ao **mesmo documento** no outro idioma, então toda
página nova nasce nas três ou o seletor aponta para o nada.

Os links "Como funciona" e "Preços" do topo são âncoras da landing (`/#precos`,
`/en#pricing`, `/es#precios`). Quando vêm de um documento, o `app.js` troca a
página e rola até a âncora.

`app.js` troca a página sem recarregar, mantendo a URL pela History API. Se o
JavaScript falhar, cada página continua sendo um arquivo estático que funciona
sozinho.

## Cor e tipografia

Mesma paleta do app, **sem modo escuro** — o app é `light` fixo e o site
acompanha. As variáveis estão no topo do `style.css`; nenhuma regra usa hex
solto. Fraunces 600 nos títulos, DM Sans no corpo, DM Mono em número, data e
eyebrow.

## Publicar de graça no Netlify

1. Entre em [app.netlify.com/drop](https://app.netlify.com/drop).
2. Arraste a pasta `web` inteira para a área indicada.
3. Crie a conta gratuita quando ele pedir.
4. Em **Site configuration → Change site name**, escolha o nome.

Pronto, com HTTPS automático. Para atualizar depois, arraste a pasta de novo em
**Deploys**.

## Ligar um domínio próprio (opcional)

Em **Domain management → Add a domain**, informe o domínio e siga as instruções
de DNS. O certificado é emitido sozinho.

## Depois de publicar

Troque `SITE_BASE_URL` em `src/constants/legal.ts`, no repo do app, pela URL final. Os caminhos
em `LEGAL_PATHS` não mudam — o app escolhe o idioma sozinho a partir de
`i18n.language`.

Nas lojas, use a versão em português: `/privacidade` no campo de Privacy Policy,
`/exclusao` no campo de exclusão de dados do Google Play e `/ajuda` no Support
URL da Apple.

## Páginas de autenticação

Duas páginas transacionais, fora da navegação de documentos. Não têm menu
lateral, não entram no seletor de idioma e levam `noindex`.

```
web/
├── auth.js                      →  /auth.js     lógica compartilhada
├── confirmado/                  →  /confirmado
└── nova-senha/                  →  /nova-senha
```

`/confirmado` fecha o cadastro: confirma o e-mail e manda a pessoa abrir o app.
`/nova-senha` troca a senha ali mesmo, no navegador — o app não participa.

O idioma sai de `navigator.language`, com inglês como padrão. Uma página só
atende os três idiomas porque o modelo de e-mail do Supabase tem uma URL só.

### Como funciona sem SDK

`auth.js` fala direto com a API REST do Supabase, em duas chamadas:

1. `POST /auth/v1/verify` com `{ type, token_hash }` valida o link e devolve
   `access_token`.
2. `PUT /auth/v1/user` com `Authorization: Bearer <access_token>` grava a senha.

A `anon key` fica no arquivo. Ela é pública por definição — já vai no bundle do
app — e sozinha não abre nada: a RLS e as políticas continuam valendo.

O link usa `token_hash`, e **não** o código PKCE. O verificador do PKCE mora no
armazenamento do celular, então o navegador nunca conseguiria completar uma
troca iniciada pelo app. `token_hash` não tem esse problema.

O token some da URL com `history.replaceState` logo que é lido, para não ficar
no histórico nem vazar pelo `Referer`.

### O que configurar no Supabase

Em **Authentication → URL Configuration**, ponha o domínio real em **Site URL**.
Hoje está `http://localhost:3000`, que é a origem dos links quebrados no e-mail.

Em **Authentication → Email Templates**, troque o link dos dois modelos:

**Confirm signup**

```html
<a href="{{ .SiteURL }}/confirmado?token_hash={{ .TokenHash }}&type=email">Confirmar meu e-mail</a>
```

**Reset password**

```html
<a href="{{ .SiteURL }}/nova-senha?token_hash={{ .TokenHash }}&type=recovery">Criar nova senha</a>
```

Sem essa troca os modelos continuam usando `{{ .ConfirmationURL }}`, que aponta
para o Site URL e ignora as páginas novas.

O SMTP embutido envia **2 e-mails por hora no projeto inteiro** e não serve para
produção. Configure um SMTP próprio em **Project Settings → Authentication →
SMTP Settings** antes de publicar.
