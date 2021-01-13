const fs = require('fs');
const https = require('https');
const express = require('express');
const router = require('./routes');
const cors = require('cors')
const app = express();

const pkey = fs.readFileSync('/etc/letsencrypt/live/nooksworkbench.com/privkey.pem', 'utf8');
const ccert = fs.readFileSync('/etc/letsencrypt/live/nooksworkbench.com/fullchain.pem', 'utf8');
const credentials = {
    key: pkey,
    cert: ccert,
    requestCert: false
};

app.use(cors())
app.use(router);

// Listen
https.createServer(credentials, app).listen(3000, () => {
    console.log('Server running on port: 3000.')
});