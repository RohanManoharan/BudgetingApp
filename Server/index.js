const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "c?1WcotlMi4aRRaRRWR4RMMc",
    database: "budgetingapp",
});

app.post('/register', (req, res)=> {

    const email = req.body.email
    const password = req.body.password
    const name = req.body.name


    db.query("INSERT INTO users (name, email, password) VALUES (?,?,?)", 
    [name, email, password], 
    (err, result)=>{
        console.log(err)
    }
);
})

app.listen(3001, () => {
    console.log("Running server on port 3001");
});
