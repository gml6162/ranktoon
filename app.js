const express = require('express');
var app = express();
app.locals.pretty = true;
app.set('view engine', 'pug');
//생략 가능
app.set('views', './views');
app.use(express.static('public')); //static directory 'public'
app.get('/topic', function(req, res){
    res.send(req.query.id);
})
app.get('/template', function(req, res){
    res.render('temp',{time:Date(), _title:'HJ'});
})
app.get('/', function(req, res){
    res.send('welcome to home');
});
app.get('/login', function(req, res){
    res.send('login please');
})
app.get('/route', function(req, res){
    res.send('test.html')
})
app.get('/dynamic', function(req, res){
    var lis = '';
    for(var i = 0; i < 5; i++)
    {
        lis += '<li>coding</li>';
    }
    var time = Date();
    var output = `Hello, dynamic!${lis} ${time}`
    res.send(output);
})
app.listen(3000, function(){
    console.log('Connected 3000 port');
});