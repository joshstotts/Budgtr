const express = require('express');
const budget = require('./models/budget');
const app = express();
const port = 3000;


// middleware
app.use(express.urlencoded({ extended: false }));


app.use(express.static('public'));


//index
app.get('/budgets', (req, res) => {
    res.render('index.ejs', {
        allBudgets: budget
    });
});

//new
app.get('/budgets/new', (req, res) => {
    res.render('new.ejs')
});

//create
app.post('/budgets', (req, res) => {
    budget.push(req.body);
    res.redirect('/budgets')
});

//show
app.get('/budgets/:indexOfBudgetArray', (req, res) => {
    res.render('show.ejs', {
        budget2: budget[req.params.indexOfBudgetArray]
    })
});


// for(let i = 0; i < budget.length; i++) {


// if (budget[i].amount < 0) {
//     document.body.style.backgroundColor = 'red' ;
//     }
// }




app.listen(port, () => {
    console.log(`I love you ${port}`)
});