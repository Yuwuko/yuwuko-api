const express = require('express');
const router = require('./routes');
const cors = require('cors')
const app = express();

app.use(cors())
app.use('/api/', router);

// Listen
app.listen('8080', () => {
    console.log('Server running on port: 8080.')
});