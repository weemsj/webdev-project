let express = require('express');

let app = express();
let handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', 4372);

app.get('/',function(req,res){
    res.render('index', {layout: null});
});

app.get('/about',function(req,res){
    res.render('about', {layout: null});
});

app.get('/connect',function(req,res) {
    res.render('connect', {layout: null});
});

app.post('/connect',function(req,res) {
    req.body.name()
    req.body.email()
    res.render("thankyou", {layout: null})
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/gallery',function(req,res) {
    res.render('gallery', {layout: null});
});

app.get('/thankyou',function(req,res) {
    res.render('thankyou', {layout: null});
});

app.use(function(req,res){
    res.type('text/plain');
    res.status(404);
    res.render('404 - Not Found', {layout: null});
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.render('500 - Server Error', {layout: null});
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});