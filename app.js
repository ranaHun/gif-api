const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json()); // application/json
app.use(express.static(path.join(__dirname, 'public')));

const gifRoutes = require('./routes/gif');
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use('/', gifRoutes);

app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});
app.listen(3000);
