const express = require('express');

const path = require('path');
const app = express();
const port = 3000;

// Serve arquivos estáticos a partir do diretório "public"
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port);

module.exports = app