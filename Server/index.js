const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "c?1WcotlMi4aRRaRRWR4RMMc",
    database: "userlogin",
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
});

app.post("/login", (req, res) =>{
    const email = req.body.email
    const password = req.body.password


    db.query("SELECT * FROM users WHERE email = ? AND password = ?", 
    [email, password], 
    (err, result)=>{

        if (err) {
            res.send({err: err});
        }

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({message: "Wrong email/password!"});
        }
    }
);
});

// app.post("/home", (req, res) =>{
//     const name = req.body.name

//     db.query("SELECT name FROM users WHERE email = ? AND password = ?", 
//     [email, password], 
//     (err, result)=>{
//         if(err){
//             console.log(err);
//         } else {
//             res.send(result.name);
//         }
//     });
// });

app.listen(3001, () => {
    console.log("Running server on port 3001");
});
