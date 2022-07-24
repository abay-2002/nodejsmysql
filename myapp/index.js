const express = require('express');
const PORT = 9000;
const app = express();

// db
const mysql = require('mysql');
// Create mysql connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port:"3306",
    database: "nodejsmysql"
});

// Connect to Mysql db
db.connect((err) => {
    if(err){
        throw err
    }
    console.log("MySql Connected..")
})

// Express routing middleware
app.get('/createdb', (req, res) => {
    db.query("SELECT ")
    db.query("CREATE DATABASE mytestdatabase", (err) => {
        if(err){
            throw err
        }
        res.send("Successfully created database!")
        console.log("Successfully created database!")
    })
});

app.listen(PORT, () => {
    console.log(`App is listening to port:${PORT}`)
});