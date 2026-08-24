# Broto — site

Site do app Broto: landing de apresentação, documentos legais, ajuda e as duas
páginas de auth que fecham cadastro e troca de senha. **Repo privado**, conteúdo
publicado. Estático puro — sem build, sem dependência, sem framework.

Os outros dois repos: `broto-app` (público, o app Expo) e `broto-supabase`
(privado, schema e Edge Functions).

---

## O que não pode quebrar

`/confirmado` e `/nova-senha` são páginas transacionais: o link do e-mail do
Supabase cai nelas. Se pararem de funcionar, ninguém confirma cadastro nem
recupera senha. Elas não entram na navegação, não entram no seletor de idioma,
levam `noindex`, e `auth.js` fala direto com a API REST de auth — sem SDK.

Antes de mexer em `auth.js`, `style.css` ou nos dois HTMLs, leia a seção
"Páginas de autenticação" do `README.md`.

A `anon key` no `auth.js` é pública por definição — já vai no bundle do app — e
sozinha não abre nada: a RLS continua valendo. Não é vazamento.

## Idiomas

Três, um HTML por documento por idioma: `pt` na raiz, `/en/`, `/es/`. O seletor
leva ao **mesmo documento** no outro idioma, então toda página nova nasce nas
três ou o seletor aponta para o nada.

`app.js` troca a página sem recarregar pela History API. Se o JavaScript falhar,
cada arquivo continua sendo estático e funciona sozinho.

## Design

Mesma paleta e mesmas fontes do app, sem modo escuro — o app é `light` fixo e o
site acompanha. Tokens em `style.css`, nunca hex solto na regra:

| var | hex | uso |
|---|---|---|
| `--bg` | `#F7F4ED` | fundo (areia) |
| `--surface` | `#FFFDF8` | cards (cerâmica) |
| `--ink` | `#17251A` | texto principal |
| `--ink-2` | `#5D6B5F` | texto secundário |
| `--ink-3` | `#8A968C` | texto terciário |
| `--line` | `#E3DED2` | bordas |
| `--clay` | `#B4522F` | ação primária (barro) |
| `--clay-soft` | `#F2E2D8` | fundo de destaque |
| `--moss` | `#3E6B4A` | estado positivo |
| `--ochre` | `#A8761C` | alerta médio |
| `--danger` | `#9B2C2C` | destrutivo |

Fraunces 600 nos títulos, DM Sans no corpo, DM Mono em número, data e eyebrow.
A interface é neutra de propósito: cor cheia só no que é ação.

## Copy

pt-BR direto e informal, sem jargão, sem "Ops!" e sem exclamação. Número dito na
tela é número real e tem que bater com o app, com os Termos e com a ficha da
loja. Nenhum plano se chama "ilimitado".

## Publicar

Netlify, arrastando a pasta. Detalhes e configuração de domínio no `README.md`.
