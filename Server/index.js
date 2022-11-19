const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser=require('body-parser')
const cors = require('cors');
var multer = require('multer');

const app = express();
app.set('view engine' ,'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));
app.use(express.json());

// Models 
const Sign = require('./models/Sign');


//Port 
const PORT = process.env.PORT || 4000;

// Routes
const signItem = require('./Router/username');

app.use(cors({origin: '*'}))

//Database 
mongoose.connect('mongodb://localhost:27017/login',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log("Login database is connected"))
.catch(error => console.log(error));



// app.use('/', storage)
app.use('/', signItem);
// app.use('/Register', m)

// Server Connetion
app.listen(PORT, ()=> console.log("Server is conneted on port 4000"))
