const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/index.html')
});

app.get('/css', (req, res) => {
    return res.sendFile(__dirname + '/output.css');
});

app.listen(2222, () => console.log('TailwindCSS Compiler is running on 2222'));