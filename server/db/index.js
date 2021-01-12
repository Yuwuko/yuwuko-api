const mysql = require('mysql')

let connection = mysql.createPool({
    connectionLimit: 10,
    user: '',
    password: '',
    host: 'localhost',
    port: '3306',
    database: ''
});

let dbyuuko = {};

dbyuuko.events = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT `messageEvents` FROM `metrics_discord` ORDER BY `dateInserted` DESC LIMIT 1;', (err, results) => {
            if(!err) {
                return resolve(results);
            }
            return reject(err);
        })
    })
}

dbyuuko.guilds = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT `guildCount` FROM `metrics_discord` ORDER BY `dateInserted` DESC LIMIT 1', (err, results) => {
            if(!err) {
                return resolve(results);
            }
            return reject(err);
        })
    })
}

dbyuuko.uptime = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT `uptime` FROM `metrics_system` ORDER BY `dateInserted` DESC LIMIT 1', (err, results) => {
            if(!err) {
                return resolve(results);
            }
            return reject(err);
        })
    })
}

module.exports = dbyuuko;