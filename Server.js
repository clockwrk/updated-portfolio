// var connect = require('connect');
// var serveStatic = require('serve-static');
// connect().use(serveStatic(__dirname)).listen(8080, function(){
//     console.log('Server running on 8080...');
// });
//


let express = require('express'),
    app = express(),
    router = express.Router(),
    path = require('path'),
    morgan = require('morgan'),
    // db = require('./server/db/models/index.js'),
    bodyParser = require('body-parser'),
    chalk = require('chalk'),
    // env = require(path.join(__dirname, './server/env')),
    http = require("http"),
    volleyball = require("volleyball"),
    opn = require('opn');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

router.use(volleyball);

// app.set('env', env)

app.use('/api', require('./server/routes/index.js'));

router.use(function(req, res, next) {
    console.log('/' + req.method);
    next();
});

router.get('/', function(req, res) {
    res.sendFile(__dirname + '/browser/index.html');
});

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/browser')));
app.use(express.static(path.join(__dirname, '/node_modules')));

app.use('*', router);

app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})


// db.sync()
//     .then(function() {
        var PORT = process.env.PORT || 8080;
        app.listen(PORT, function() {
            console.log('Live at Port 8080');
        });
        opn('http://localhost:8080');
    // })
    // .catch(function(err) {
    //     console.error(chalk.red(err.stack));
    // });
