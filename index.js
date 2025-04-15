const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Webhook от Sendpulse
app.post('/webhook/sendpulse', (req, res) => {
    console.log('📩 Пришло сообщение от Sendpulse:', req.body);
    res.status(200).send('OK');
});

// Webhook от Медфлекс
app.post('/webhook/medflex', (req, res) => {
    console.log('📨 Уведомление от Медфлекс:', req.body);
    res.status(200).send('Received');
});

app.listen(port, () => {
    console.log(`🚀 Сервер запущен на http://localhost:${port}`);
});