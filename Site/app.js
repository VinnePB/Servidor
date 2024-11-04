const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configuração do diretório de views e do motor de visualização
app.set('views', path.join(__dirname, 'servidor-principal', 'views'));
app.set('view engine', 'ejs');

// Configuração para servir arquivos estáticos (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página principal
app.get('/', (req, res) => {
    res.render('index');
});

// Rota para a página de atividades do GCI
app.get('/part1', (req, res) => {
    res.render('part1');
});

// Rota para a página do portfólio de desenhos
app.get('/part2', (req, res) => {
    res.render('part2');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});