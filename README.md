![enter image description here](https://i.imgur.com/MhLWGHL.png)

# Descrição

Olá! Meu nome é Lucas. Ao criar o projeto para esse desafio encarei como uma oportunidade para testar meus conhecimentos de PHP e Laravel. Com isso em mente, decidi criar algumas funcionalidades básicas de um framework MVC inspirado em Laravel. No final acabei decidindo até dar continuidade no projeto desse framework, e que em breve pretendo criar um repositório aberto para o mesmo. Mas de volta ao desafio. Nesse repositório temos o front-end em React 18 com Vite e o back-end com PHP 8.1 utilizando o composer.


# Overview do framework

Nessa versão inicial temos:

* Rotas
* Modelos
* Controllers
* Middlewares
* Querybuilder primitivo
* Autenticação JWT

Existem ainda melhorias a serem feitas, principalmente no querybuilder. Por questão de tempo, acabei optando por um bem mais simples e com problemas de herança e orientação. Em partes ficou quase programação funcional, o que não era a intenção.

## Rotas

O roteador é bem simples, todo acesso ao index.php aciona o Framework\Router, que por sua vez verifica todas as rotas cadastradas em App\Routes e faz o match para os devidos controllers e funções.

Por enquanto só são suportadas rotas POST e GET, tendo uma rota OPTIONS para responder à preflights do CORS.

## Modelos

Extendem o Framework\Model\BaseModel, que por sua vez realiza a conexão com o banco de dados e também gerencia as queries através de funções.

Provavelmente o ponto fraco do projeto nessa primeira versão.


## Controllers

Basicamente podem responder a qualquer request passado pelo Router. Mas criei um ApiResource tendo em mente criar algumas funções de CRUD e respostas em JSON.

## Middlewares 

Executam antes da call de função do controller. O router aciona a função run( ) dos middlewares.

Por enquanto, a rota só suporta um middleware, portanto para criar uma ação em cadeia é necessário chamar um middleware dentro de outro.

# React

Optei por uma aplicação simples de React utilizando Vite. A arquitetura gira em torno de hooks para fazer calls na API com o react-query e uma componentização tendo em mente o reaproveitamento de código, como o BaseFormModal, que dispara um modal com um formulário.

Utilizei um pacote de estado/proxys chamado valtio, por pura curiosidade. Mas acho que nesse caso, o Context é realmente suficiente, não achei nenhuma vantagem nele.

Como UI Library optei pelo Bootstrap simplesmente por familiaridade.

# Instruções de build e deploy

Para instalar a API, é necessário rodar os comandos:

```
composer install
composer dump-autoload
```

Para rodar a API o comando php -S localhost:8000 dentro da pasta backend é suficiente. **Atenção!** é necessário alterar os valores de conexão com o banco em **backend/App/config/config.php**

Para instalar o projeto react:
Para instalar a API, é necessário rodar os comandos:

```
npm install
```
E para executar:
```
npm run dev
```


## Versão Online

No projeto, você pode notar que existe um pacote no composer.json chamado Bref. Utilizei ele para fazer o deploy com serverless em um Lambda na aws ( https://1kycrtqai9.execute-api.us-east-1.amazonaws.com/ )

O front-end subi em bucket S3 como um site estático. Existe um comando deploy dentro do package.json que sobe para a AWS a build do Vite.

http://market-react.s3-website-us-east-1.amazonaws.com/
![Página de login](https://i.imgur.com/xNmml4j.png)
![enter image description here](https://i.imgur.com/TcS4d4Z.png)
![enter image description here](https://i.imgur.com/lCpJXNU.png)
![enter image description here](https://i.imgur.com/15MbAk3.png)

## Build React

Recomendo rodar o servidor dev do Vite, pela compatibilidade com o CORS da API. Mas aqui está o projeto buildado:

https://file.io/xykxwomlim25

Provavelmente se rodar através do index.html nessa pasta terá problemas de CORS.
