const express = require('express');
const app = express();
const port = 3000;

const version = '1.0.0';

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
    console.log(`[Version ${version}]: New request => ${req.url}`);
});

// Health check
app.get('/health', (req, res) => {
    res.sendStatus(200);
    console.log(`[Version ${version}]: Health check`);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`[Version ${version}]: Server running at http://0.0.0.0:${port}/`);
});
