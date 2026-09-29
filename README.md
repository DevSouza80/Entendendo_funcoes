# 🧩 Entendendo Funções

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen?style=for-the-badge)
![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-blue?style=for-the-badge)

Projeto didático em **HTML** e **JavaScript puro** que demonstra, na prática, o uso de **funções**, **manipulação do DOM** e **eventos** por meio de uma simulação simples de acesso e saída de uma conta.

---

## 📑 Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Como executar](#-como-executar)
- [Como funciona](#-como-funciona)
- [Conceitos praticados](#-conceitos-praticados)
- [Melhorias futuras](#-melhorias-futuras)
- [Contribuição](#-contribuição)
- [Licença](#-licença)
- [Autor](#-autor)

---

## 📖 Sobre o projeto

O **Entendendo Funções** foi criado com o objetivo de consolidar os fundamentos de funções em JavaScript. A aplicação exibe uma mensagem de boas-vindas e um botão de acesso. Ao clicar, o usuário informa nome e sobrenome, e a página é atualizada dinamicamente com uma saudação personalizada e um botão para sair da conta.

É um ótimo exemplo para quem está começando e quer entender como o JavaScript interage com o HTML.

---

## ✨ Funcionalidades

- ✅ Botão de acesso que dispara uma função por evento de clique
- ✅ Captura de nome e sobrenome via `prompt`
- ✅ Validação de entrada (campo vazio ou cancelamento)
- ✅ Mensagem de boas-vindas personalizada
- ✅ Criação dinâmica do botão **"Sair da conta"**
- ✅ Mensagem de despedida e atualização da interface ao sair

---

## 🛠 Tecnologias utilizadas

| Tecnologia | Uso |
|------------|-----|
| **HTML5** | Estrutura da página |
| **JavaScript (ES6)** | Lógica, funções e manipulação do DOM |

Nenhuma biblioteca ou framework externo é necessário.

---

## 📂 Estrutura do projeto

```
entendendo-funcoes/
│
├── index.html        # Estrutura da página
├── js/
│   └── script.js     # Lógica da aplicação
└── README.md         # Documentação do projeto
```

---

## 🚀 Como executar

### Pré-requisitos

Apenas um navegador moderno (Chrome, Firefox, Edge, Safari etc.).

### Passo a passo

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/entendendo-funcoes.git
   ```

2. **Acesse a pasta do projeto**

   ```bash
   cd entendendo-funcoes
   ```

3. **Abra o arquivo `index.html`** no navegador (dois cliques no arquivo) ou, se preferir, utilize a extensão **Live Server** do VS Code.

---

## ⚙️ Como funciona

### Fluxo da aplicação

1. A página carrega com a mensagem **"Bem Vindo!"** e o botão **Acessar**.
2. Ao clicar em **Acessar**, a função `entrar()` é executada e solicita nome e sobrenome.
3. **Se o nome for vazio ou o usuário cancelar**, é exibido um alerta de erro e a mensagem inicial é restaurada.
4. **Se o nome for válido**, a página exibe a saudação personalizada e cria o botão **Sair da conta**.
5. Ao clicar em **Sair da conta**, a função `sair()` exibe um alerta de despedida e atualiza a tela com a mensagem **"Você saiu!"**.

### Funções principais

| Função | Descrição |
|--------|-----------|
| `entrar()` | Coleta os dados do usuário, valida o nome e atualiza a interface com a saudação e o botão de saída |
| `sair()` | Exibe o alerta de despedida e altera a mensagem da página |

### Trecho de código

```javascript
function entrar() {
   var nome = prompt("Digite seu nome");
   var sobreNome = prompt("Digite seu sobrenome");

   if (nome === '' || nome === null) {
      alert("Ops algo deu errado");
      area.innerHTML = "Clique no botão para acessar...";
   } else {
      area.innerHTML = "Bem Vindo " + nome + " " + sobreNome;

      let botaoSair = document.createElement("button");
      botaoSair.innerText = "Sair da conta";
      botaoSair.onclick = sair;
      area.appendChild(botaoSair);
   }
}
```

---

## 🎓 Conceitos praticados

- Declaração e chamada de **funções**
- **Eventos** com `onclick`
- Seleção de elementos com `document.getElementById()`
- Alteração de conteúdo com `innerHTML`
- Criação de elementos com `document.createElement()`
- Inserção de elementos no DOM com `appendChild()`
- Estruturas condicionais (`if / else`)
- Caixas de diálogo nativas: `prompt()` e `alert()`

---

## 🔮 Melhorias futuras

- [ ] Substituir `prompt()` por um formulário HTML com campos de entrada
- [ ] Validar também o campo de sobrenome
- [ ] Adicionar estilização com CSS
- [ ] Trocar `var` por `let`/`const` seguindo boas práticas do ES6
- [ ] Salvar a sessão do usuário com `localStorage`
- [ ] Tornar o layout responsivo

---

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um **fork** do projeto
2. Crie uma branch para sua feature: `git checkout -b minha-feature`
3. Faça o commit das alterações: `git commit -m "feat: minha nova feature"`
4. Envie para o repositório: `git push origin minha-feature`
5. Abra um **Pull Request**

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Consulte o arquivo `LICENSE` para mais detalhes.

---

## 👨‍💻 Autor

Feito com 💙 por **Seu Nome**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/seu-usuario)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/seu-perfil)
