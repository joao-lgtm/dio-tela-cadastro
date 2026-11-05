# 📝 DIO — Tela de Cadastro (React)

Desafio da **Formação React Developer (DIO)**: depois de aprender React CLI, styled-components, Hooks e Formulários, o objetivo é **criar a tela de cadastro** da plataforma DIO, seguindo o layout do Figma e o projeto do expert.

- 🔗 Repositório original: [digitalinnovationone/trilha-react-desafio-3](https://github.com/digitalinnovationone/trilha-react-desafio-3)
- 🎨 Layout no Figma: [DIO-CLONE](https://www.figma.com/file/fvjQQNtqaUdpuNixvCZVav/DIO-CLONE?node-id=0%3A1)

## ✅ O que veio das aulas
Home, Login e Feed com React Router, styled-components, react-hook-form, Axios e json-server como API fake.

## 🎯 Desafio: tela de Cadastro (`/cadastro`)
- Campos **Nome completo**, **E-mail** e **Senha** com ícones (react-icons)
- Botão **"Criar minha conta"** + texto de termos + link **"Já tenho conta. Fazer login"**
- Cria o usuário com `POST /users` no json-server e entra direto no Feed

## 🚀 Melhorias que eu adicionei
| Melhoria | Detalhe |
|---|---|
| ✅ Validação com **Yup** | Nome (mín. 3, só letras), e-mail válido, senha com 6+ caracteres, letra e número |
| 💬 Erros por campo | Mensagem embaixo de cada input e borda vermelha |
| 🔒 Botão inteligente | Desabilitado enquanto o formulário é inválido ou está enviando |
| 🔁 E-mail duplicado | Verifica antes de cadastrar e avisa o usuário |
| 🔐 Contexto de autenticação | `AuthContext` com login/logout e sessão salva no `localStorage` (sem a senha) |
| 🚧 Rota protegida | `/feed` só abre logado; caso contrário redireciona para `/login` |
| 🧭 Navegação funcionando | Botões Entrar/Cadastrar do header, "Criar Conta" no login, "Começar agora" na home |
| 🚪 Botão Sair | No header quando logado |
| ⚠️ Erros de API | Mensagem amigável se o json-server não estiver rodando (antes era um `TODO`) |
| 📱 Responsivo | Login e Cadastro empilham em telas pequenas |
| 🧪 Testes | 7 testes das regras de validação (Jest) |

## 🐛 Ajustes no código original
- Título do login dizia "Faça seu cadastro" → "Faça seu login"
- Props `variant`, `percentual` e `flex` iam para o DOM (warnings) → transient props (`$variant`…)
- CSS do header com `;` faltando (`display:flex` quebrava o alinhamento)
- Fonte Open Sans era usada mas nunca carregada
- `console.log` de erros removido

## ▶️ Como rodar
```bash
npm install
npm run api    # json-server na porta 8001 (terminal 1)
npm start      # app em http://localhost:3000 (terminal 2)
npm test
```

Usuário de teste: `pablo@email.com` / `123456`

> ⚠️ O json-server é só uma API fake de estudo: a senha fica em texto puro no `db.json`. Em produção o back-end faria o hash.

## 🛠️ Tecnologias
React 18 · React Router 6 · styled-components · react-hook-form · Yup · Axios · json-server · react-icons · Jest
