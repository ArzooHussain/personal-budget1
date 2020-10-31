const express = require('express');
const app = express();
const port = 9000;
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const budgetModel = require('./models/schema.js')
const url = 'mongodb://localhost:27017/personal_budget_8';

app.use('/', express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/', express.static('public'));

/* const budget = { 
 myBudget:[
    {
        title:'Eat out',
        budget: 25
    },
    {
        title:'Rent',
        budget: 750
    },
    {
        title:'Grocery',
        budget: 110
    },
  ]
}; */

app.get('/budgetItem', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
      .then(()=> {
        budgetModel.find({})
          .then((data)=> {
            res.json(data)
            res.send(data)
            mongoose.connection.close();
          })
          .catch((connectionError)=> {
            console.log(connectionError);
          });
      });
  });
  
  app.post('/budgetItem1', (req, res) => {
     //console.log(req.body);
     mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
     .then(()=> {
         var budgetItem = new budgetModel({
         //const budgetItem = new budgetModel({
         title: req.body.title,
         budget: req.body.budget,
         color: req.body.color
       });
       budgetModel.insertMany(budgetItem)
        .then((data)=> {
        res.json(data);
       // res.send(data);
        mongoose.connection.close();
        //res.statusCode = 202;
        })
        .catch((connectionError)=> {
          console.log(connectionError)
        });
     })
      /*  .catch((connectionError)=>{
          console.log(connectionError)
        });*/
  });
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });

































/*app.get('/hello', (reg, res)=> {
    res.send('Hello World!');
});

app.get('/budget', (reg, res)=> {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});*/