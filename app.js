const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Body Parser Middleware
// Parse Application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({extended: false}));

// parse Application/Json
app.use(bodyParser.json());

// Load View Engine
app.set('views',path.join(__dirname,"views"));
app.set('view engine','pug');

// Set public folder
app.use(express.static(path.join(__dirname,"public")));

 app.get('/', (req, res)=>{
     res.render('index');
 });
app.post('/submitForm',(req, res)=>{
    //console.log(req.body); -> use to console form data object
    console.log(req.body.username);
    console.log(req.body.password);
    if(req.body.username === 'ashish1991.2009@gmail.com' && Number(req.body.password) === 12345)
    {
        // obviously u will do user authentication in better way.
        // Here if block is just used to demonstrate functionality
        res.render('userHome',{email: req.body.username});
    }
    else{
        res.render('index',{msg:1});
    }
});

app.get('/product', (req, res) => {
    res.render('product', {product: 'Biscuit', quantity: 10});
});

app.listen(port = 3000, () =>{
    console.log("app started at port :"+port);
})