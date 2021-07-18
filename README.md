# NLW6 Valorize
Aplicação feita durante o evento Next Level Week 05 da [Rocketseat](https://rocketseat.com.br/) de 20/06/2021 - 27/06/2021. A aplicação é feita em Node.js com Express e JWT para autenticação de usuário.
<p>Valorize é um projeto em que os usuário podem fazer o seu cadastro e deixar comentários associados a tags como elogios para outro usuários.</p> 
<p>Somente administradores podem criar tags.</p>

# API
<p align="center">
  <p><img align="center" src=".github/Valorize List Users.png" alt="Valorize List Users" width="800" border="0"></p>
  <p><img align="center" src=".github/Valorize List Tags.png" alt="Valorize List Tags" width="800" border="0"></p>
</p>

# Funcionalidades
 - Cadastro de usuários, tags e elogios em banco de dados
 - Autenticação de usuário por JWT
 - Listagem/Criação de tags, usuários e elogios
 - Limitação de ações para usuário não admin

# Utilizar projeto
## Requisitos
    Instalar o Git
    https://git-scm.com/downloads

    Instalar o NodeJs
    https://nodejs.org/en/

    Instalar o Yarn
    https://classic.yarnpkg.com/en/docs/install/#debian-stable

## Primeiro passo - baixar o projeto
Faça download do repositório acima ou use o seguinte comando na pasta onde deseja baixar o projeto:
 - git clone https://github.com/AloisioFernandes/NLW6-Together-Node.git

## Segundo passo - instalar dependências
Digite o seguinte comando dentro da pasta nlwValorize através do terminal:
 - yarn install

## Terceiro passo - executar migrations
Ainda na pasta nlwValorize, digite o seguinte comando no terminal:
 - yarn typeorm migration:run.

## Quarto passo - iniciar servidor
Ainda na pasta nlwValorize, digite o seguinte comando no terminal:
 - yarn dev

## Quinto passo - acessar projeto
As requisições podem ser feitas através da rota http://localhost:3000/

# Principais Tecnologias
 - [Node.js](https://nodejs.org/en/)
 - [Express](https://expressjs.com/en/starter/installing.html)
 - [TypeORM](https://typeorm.io/#/)
 - [SQLite](https://www.sqlite.org/index.html)
 - [JWT](https://jwt.io/introduction)