const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString:
    "postgres://default:Qbf6zPSehr1O@ep-icy-haze-05113075-pooler.ap-southeast-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require",
});

pool.connect((err)=>{
    if (err) {
        throw err
    }
    console.log('BERHASIL CONNECT POSTGRES');
})

module.exports = pool