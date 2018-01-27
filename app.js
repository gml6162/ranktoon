const express = require('express');
var app = express();
app.locals.pretty = true;
app.set('view engine', 'pug');
//생략 가능
app.set('views', './views');
app.use(express.static('public')); //static directory 'public'
app.get('/', function(req, res){
    res.send('welcome to home');
});
app.listen(80, function(){
    console.log('Connected 3000 port');
});