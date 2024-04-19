# Sistema de Gerenciamento de Usuários

Este projeto é um sistema de gerenciamento de usuários desenvolvido em React-Vite, que utiliza requisições à APIRest para realizar operações como adição, listagem e exclusão de usuários.

## Como executar o projeto

- Certifique-se de ter o Node.js instalado em sua máquina.
- Clone este repositório para o seu ambiente local.
- Abra o terminal na pasta raiz do projeto e execute o comando `npm install` para instalar as dependências.
- Após a instalação das dependências, execute o comando `npm start` ou `npm run dev` para iniciar o servidor de desenvolvimento.
- O deploy do projeto estará disponível em [[https://infog2.onrender.com/](https://infog2.onrender.com/)].
- O projeto estará disponível em [http://localhost:5173](http://localhost:5173) no seu navegador.

## Rotas

O sistema possui as seguintes rotas:

- `/`: Rota inicial, direciona para a tela de Login.
- `/login`: Tela de login do sistema.
- `/usuarios`: Tela de adição de usuários, onde é possível adicionar novos usuários ao sistema.
- `/inicio`: Tela inicial após o login, exibe as funcionalidades principais do sistema.
- `/lista-usuarios`: Tela de listagem de usuários, exibe a lista de usuários cadastrados no sistema.

## Funcionalidades
- **Autenticação de Usuário:** Apenas o usuário com as credenciais corretas, é permitido fazer login no sistema.
- **Adicionar Usuário:** Permite adicionar novos usuários ao sistema com informações básicas.
- **Listar Usuários:** Exibe a lista de usuários cadastrados no sistema.
- **Login de Usuário:** Realiza a autenticação do usuário no sistema.
- **Listagem de Cidades e Bairros:** Disponibiliza a listagem de cidades e bairros disponíveis no sistema.

## Permissões

Apenas o usuário `usuario_teste_mario@infog2.com` com a senha `admin` possui permissões de administrador no sistema.

## Tecnologias Utilizadas

- React: Biblioteca JavaScript para construção de interfaces de usuário.
- React Router Dom: Gerenciador de rotas para aplicações React.
- Axios: Cliente HTTP para realizar requisições à APIRest.

## Contribuindo

Este é um projeto de código aberto derivado do teste fornecido da Infog2.
