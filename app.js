const express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.locals.pretty = true;
//생략 가능
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public')); //static directory 'public'
app.get('/', function(req, res){
    res.render('main');
});
app.listen(port, function(){
    console.log('Connected 3000 port');
});