# 🚀 Automação de Testes com Cypress e Cucumber

Projeto com o intuito de realizar a automação de dois cenários de testes para a página "Your Logo - A New Experience", utilizando Cypress, Cucumber, PageObjects e Reports.

## 🛠️ Construído com

Neste repositório você encontrará:

- [Cypress](http://www.dropwizard.io/1.0.2/docs/) -  framework de testes automatizados end-to-end utilizando JavaScript.
- [Cypress PreProcessor](https://maven.apache.org/) -  Plugin responsável por preparar um arquivo de suporte ou um arquivo de teste para o navegador.
- Conceitos de Behavior Driven Development (BDD) aplicado aos testes;
- [Cucumber](https://rometools.github.io/rome/) - Estrutura utilizada escrever e executar testes no estilo BDD com arquivos de recursos e definições de etapas para os cenários de testes.
- [Gherkin](https://cucumber.io/docs/gherkin/) - Sintaxe utilizada para padronizar a forma de descrever especificações de cenários, baseado na regra de negócio. 
- Utilização de Plugins do Cypress
- [Cypress Dashboard](https://dashboard.cypress.io/organizations/959a0282-db77-4074-a308-320dc27e17a1/projects) - Que visa aumentar a velocidade do teste enquanto dá visibilidade total dos testes em execução no pipeline de CI.
- [Multiple Cucumber Html Reporter](https://www.npmjs.com/package/multiple-cucumber-html-reporter)- Geração de reports com o Multiple Cucumber Html Reporter, que irá nos permitir navegar por todas as features, cenários e tags utilizadas.
- [Jenkinsfile](https://www.jenkins.io/doc/book/pipeline/jenkinsfile/) -  Framework que nos permitirá versionar e controlar a esteira de deploy, a fim de definir o pipeline de forma declarativa.
- [Dockerfile](https://docs.docker.com/engine/reference/builder/#:~:text=A%20Dockerfile%20is%20a%20text,command%2Dline%20instructions%20in%20succession.) -  Utilização da criação do container responsável que irá resultar um ambiente completo da aplicação e todas suas dependências, bibliotecas, binários, arquivos de configuração em um único pacote.

### 📋 Pré-requisitos

Para dar dar início ao projeto, você necessitará obter em sua máquina:

- [Node.js >= 12.1](https://nodejs.org/en/)
- [NPM >= 8.1](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Chrome](https://www.google.com/intl/pt-BR/chrome/)
- [Docker](https://docs.docker.com/desktop/windows/install/)
- [Jenkins](https://www.jenkins.io/download/)
- [GIT](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### 🔧 Instalação

Para instalar as dependências do projeto em sua máquina, utilize:

- `npm install`
*ou*
- `npm i`

## ⚙️ Executando os testes

Para executar os testes localmente, utilize os comandos abaixo:

    - ./node_modules/.bin/cypress open
    - npm run cypress:run

## 💻 Comandos

Todos os comandos abaixo podem ser disparados utilizando o prefixo "npm run":
| Comando         | Descrição |
|-----------------|--------------------------------|
| start           | Inicia o servidor              |
| cypress:run     | Executa os testes              |
| test            | Executa o servidor e os testes |
| cy:ci           | Executa a integração contínua  |
| postcypress:run | Gera o relatório               |


## ✒️ Autoria

* Bianca Morais - Automação Web Cypress - [Bianca Morais](https://github.com/BiancaMorais)


## 📄 Licença

Este projeto está sob a licença MIT.

---
⌨️ com ❤️ por [Bianca Morais](https://github.com/BiancaMorais) 😊
