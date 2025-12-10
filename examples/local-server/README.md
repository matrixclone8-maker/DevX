# examples/local-server

Exemplo mínimo de servidor local integrado ao repositório DevX.

O subprojeto contém:
- server.js — Express + Socket.IO
- public/index.html — exemplo de fetch para a rota /api/hello
- public/socket.html — exemplo de comunicação em tempo real via Socket.IO

Como rodar:

1. Entre na pasta do subprojeto:

   cd examples/local-server

2. Instale dependências:

   npm install

3. Inicie o servidor (porta padrão 3001):

   npm start

4. Abra no navegador:

   http://localhost:3001/           -> index.html
   http://localhost:3001/socket.html -> socket.html

Observações:
- O servidor serve os arquivos estáticos da pasta public.
- A porta padrão foi ajustada para 3001 para evitar conflitos com um servidor na raiz que possa rodar na 3000.
- Em desenvolvimento, você pode usar nodemon com npm run start:dev.
