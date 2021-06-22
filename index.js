const { response } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const port = 3333;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/mechaDanilo', (request, response) => {
    response.sendFile(path.join(__dirname + '/public/pages/mechaDanilo.html'));
});

app.listen(port, console.log("Listening at port 3333"));