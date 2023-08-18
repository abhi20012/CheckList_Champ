const express = require('express');
const app = express();
port = 8000;
const expressLayout = require('express-ejs-layouts');
app.use(expressLayout)
const db = require('./config/mongoose')

// it is use to handle middle ware here we are using express.urlenceode to use the parser
app.use(express.urlencoded()); 
app.use('/',require('./routes'));
app.use(express.static('./assets')) // for getting static css page
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server at ${port}`)
        return;
    }
    console.log(`Server is running on port: ${port}`);
})
