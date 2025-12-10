const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

app.use(cors());
app.use(express.json());
// serve static files from the public folder inside this subproject
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Olá do servidor (examples/local-server)!' });
});

app.post('/api/echo', (req, res) => {
  res.json({ youSent: req.body });
});

io.on('connection', (socket) => {
  console.log('cliente conectado', socket.id);

  socket.on('msg', (text) => {
    console.log('msg recebida:', text);
    io.emit('msg', `Servidor eco: ${text}`);
  });

  socket.on('disconnect', () => console.log('desconectou', socket.id));
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`Servidor (examples/local-server) rodando em http://localhost:${PORT}`));
