let express = require('express');
let app = express();
let router = express.Router();
let path = require('path');
let morgan = require('morgan');
let db = require('./server/db/models/index.js');
let bodyParser = require('body-parser')
let dotenv = require('dotenv');
dotenv.load();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

router.use(morgan(':method :url :status :response-time ms - :res[content-length]'));

app.use('/api', require('./server/routes/index.js'));

router.use(function(req, res, next) {
    console.log('/' + req.method);
    next();
});

router.get('/', function(req, res) {
    console.log('IP address', req.ip)
    res.sendFile(__dirname + '/index.html');
});

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/browser')));
app.use(express.static(path.join(__dirname, '/node_modules')));

app.use('/', router);

app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

db.sync()
    .then(function() {

        app.listen(3000, function() {
            console.log('Live at Port 3000');
        });

    })
    .catch(function(err) {
        console.error(chalk.red(err.stack));
    });
