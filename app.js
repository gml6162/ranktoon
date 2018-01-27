const express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.locals.pretty = true;
app.set('view engine', 'pug');
//생략 가능
app.set('views', './views');
app.use(express.static('public')); //static directory 'public'
app.get('/', function(req, res){
    res.send('welcome to home');
});
app.listen(port, function(){
    //console.log('Connected 3000 port');
});