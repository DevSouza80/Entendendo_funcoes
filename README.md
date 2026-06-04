# 📌 Funções em JavaScript — Login Simples com DOM

Projeto didático desenvolvido para praticar o uso de **funções em JavaScript**, manipulação do **DOM** e interação com o usuário via `prompt` e `alert`.

---

## 🖥️ Tecnologias utilizadas

- HTML5
- JavaScript (ES6+)

---

## 📁 Estrutura do projeto

```
projeto/
│
├── index.html
└── js/
    └── function.js
```

---

## ⚙️ Como funciona

### HTML
A página possui:
- Um `<h2>` com `id="area"` que serve como área dinâmica de mensagens
- Um botão **"Acessar"** que dispara a função `entrar()` ao ser clicado

### JavaScript

#### `entrar()`
Chamada ao clicar no botão "Acessar":
1. Abre um `prompt` pedindo o nome do usuário
2. Verifica se o campo foi deixado **vazio** ou se o usuário **cancelou**:
   - ❌ Se sim: exibe um `alert` de erro e atualiza a mensagem na tela
   - ✅ Se não: exibe uma mensagem de boas-vindas com o nome digitado e cria dinamicamente um botão **"Sair da conta"**

#### `sair()`
Chamada ao clicar no botão "Sair da conta":
1. Exibe um `alert` de despedida
2. Atualiza a mensagem na tela para "Você saiu!"

---

## 🔁 Fluxo da aplicação

```
Usuário clica em "Acessar"
        ↓
  Prompt pede o nome
        ↓
┌───────────────────────────────┐
│ Nome vazio ou cancelado?      │
│  Sim → Exibe mensagem de erro │
│  Não → Exibe boas-vindas +    │
│        botão "Sair da conta"  │
└───────────────────────────────┘
        ↓
  Usuário clica em "Sair"
        ↓
  Alerta de despedida + "Você saiu!"
```

---

## 📚 Conceitos praticados

| Conceito | Descrição |
|---|---|
| `document.getElementById()` | Selecionar elemento HTML pelo ID |
| `innerHTML` | Alterar o conteúdo de um elemento |
| `prompt()` | Capturar entrada do usuário |
| `alert()` | Exibir mensagem ao usuário |
| `document.createElement()` | Criar elementos HTML dinamicamente |
| `appendChild()` | Inserir elemento filho no DOM |
| `onclick` | Associar função a evento de clique |
| Funções JS | Declaração e chamada de funções |
| Condicionais `if/else` | Verificação de condições |

---

## 🚀 Como executar

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` no navegador
3. Clique em **"Acessar"** e interaja com a aplicação

---

## 👨‍💻 Autor
Dev Souza
