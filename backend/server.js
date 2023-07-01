const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());

const db = mysql.createConnection({
    host: "application.clqqyhrtzbj3.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "12345678",
    database: "application"
})

app.get("/check", (req, res) => {
    res.json("Hello from backend");
})

app.get("/", (req, res) => {
    const sql = "SELECT * FROM `student`";
    db.query(sql, (err, data) => {
        if(err) return res.json(ERROR);
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log("listening on port 8081")
})