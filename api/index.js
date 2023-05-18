const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')

dotenv.config();


const app = express();

app.use(cors());
app.get('/api/test', (req, res) => {
    res.json('test ok' + Date.now());
});

// console.log(process.env.API_PORT)

if (process.env.API_PORT) {
    app.listen(process.env.API_PORT);
}

module.exports = app;
