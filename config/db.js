const mysql = require('mysql');
const config = require('./../config.json'); 

const pool = mysql.createPool(
    {
        connectionLimit:config.database.max,
        host: config.database.host,
        user: config.database.user,
        password:config.database.password,
        database:config.database.database
    }
);

module.exports = {
    query:(text,params,callback) => {
        return new Promise((resolve, reject)=>{
            pool.query(text, params,(error, results, feilds)=>{
                if(error) return reject(error);
                return resolve(results);
            })
        });
    }
}