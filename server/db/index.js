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

dbyuuko.stats = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT metrics_discord.guildCount, metrics_discord.messageEvents, metrics_system.uptime FROM metrics_discord INNER JOIN metrics_system ON metrics_discord.shardId = metrics_system.shardId ORDER BY metrics_system.dateInserted DESC LIMIT 1', (err, results) => {
            if(!err) {
                return resolve(results[0]);
            }
            return reject(err);
        })
    })
}

module.exports = dbyuuko;