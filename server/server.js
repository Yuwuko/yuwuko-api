const express = require('express');
const router = require('./routes');
const app = express();

app.use('/api/', router);

// Listen
app.listen('8080', () => {
    console.log('Server running on port: 8080.')
});