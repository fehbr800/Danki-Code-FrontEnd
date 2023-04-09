const express = require('express');
const app = express();
const mysql = require('mysql')
const bodyparser = require('body-parser');
const path = require('path');

app.listen('3000', () =>{

    console.log("Servidor rodando!")

});

// Body Parser

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extend:false}));
app.use(express.static(path.join(__dirname, 'public')));


// Conexão com o banco

const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'140701',
    database: 'node'
})

db.connect((err) =>{
    if(err){
        console.log("Não deu certo!")
    }
    var sql = "SELECT * FROM clientes";
    db.query(sql, function(err,results){
        console.log(results)
    })
})

app.get('/', (req,res) =>{
    res.render('index', {});
})

