let index = require('index');

let app = index();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', 3000);

app.get('/',function(req,res){
    res.send('index.html');
});

app.get('/about',function(req,res){
    res.send('about.html');
});

app.get('/connect',function(req,res) {
    res.send('connect.html');
});

app.post('/connect',function(req,res) {
    req.body.name()
    req.body.email()
    res.send("thankyou.html")
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/gallery',function(req,res) {
    res.send('gallery.html');
});

app.get('/thankyou',function(req,res) {
    res.send('thankyou.html');
});

app.use(function(req,res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});