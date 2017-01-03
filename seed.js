var db = require('./server/db/models/index');
var User = db.model('user');
var Project = db.model('project');


var projects = [
    { 'deploy': 'http://joserenteria.nyc', 'description': 'The website that you are currently viewing. I built this site to show the projects I have worked on.', 'gitHub': 'https://github.com/clockwrk/portfolio', 'name': 'Portfolio', 'techList': ' Javascript, HTML, CSS, Angular, PostgreSQL, Heroku', 'imageUrl': '/asset/Portfolio-min.png', 'videoLink': 'https://www.youtube.com/embed/5ak0x3pe30A' },
    { 'deploy': 'https://markey.herokuapp.com/', 'description': ' This is a e commerce site that simulated buying tickets to concerts', 'gitHub': 'https://github.com/gewl/markey', 'name': 'Markey', 'techList': ' Javascript, HTML, CSS, Angular, PostgreSQL, Heroku, REST API', 'imageUrl': '/asset/Markey-min.png', 'videoLink': 'https://www.youtube.com/embed/5ak0x3pe30A' },
    { 'deploy': 'https://radiant-cliffs-28831.herokuapp.com', 'description': 'Create an art project from a android device and save it to a specific geolocation.', 'gitHub': 'https://github.com/clockwrk/ImVue', 'name': 'ImVue', 'techList': ' video camera, gyroscope, GPS, Google Maps API ,Javascript, HTML, CSS, Angular, PostgreSQL, Heroku, REST API', 'imageUrl': '/asset/ImVue-min.png', 'videoLink': 'https://www.youtube.com/embed/5ak0x3pe30A' }
]
db.sync({ force: true })
    .then(function() {
        projects.forEach(
            function(project) {
                Project.create(project)
                    .then(console.log)
                    .catch()
            })
    })
    .then(function() {
        console.log('projects created')
        User.create({ "userName": 'Jose', "password": 'taco', "salt": 'salt' })
            .then(function() {
                console.log('admin created')
                db.sync()
            })
    })
    .catch()
