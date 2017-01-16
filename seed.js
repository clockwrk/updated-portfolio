let db = require('./server/db/models/index');
let User = db.model('user');
let Project = db.model('project');

let projects = [
    { 'deploy': 'http://joserenteria.nyc', 'description': 'This project is the website that you are currently viewing. I built this dynamic portfolio to showcase my best qualities.', 'gitHub': 'https://github.com/clockwrk/portfolio', 'name': 'Portfolio', 'techList': ' JavaScript, HTML5, CSS, AngularJS, PostgreSQL, Heroku', 'imageUrl': '/asset/Portfolio-min.png', 'videoLink': '' },
    { 'deploy': 'https://markey.herokuapp.com/', 'description': ' This is an e-commerce site that simulates buying tickets to concerts.', 'gitHub': 'https://github.com/gewl/markey', 'name': 'Markey', 'techList': ' JavaScript, HTML5, CSS, AngularJS, PostgreSQL, Heroku, REST API', 'imageUrl': '/asset/Markey-min.png', 'videoLink': '' },
    { 'deploy': 'https://radiant-cliffs-28831.herokuapp.com', 'description': 'This was my capstone team project at Fullstack Academy. Imvue is used to create an art project from a android device and save it to a specific geolocation.', 'gitHub': 'https://github.com/clockwrk/ImVue', 'name': 'ImVue', 'techList': ' Canvas element, Google Maps API ,JavasSript, CSS, AngularJS, PostgreSQL, Heroku, REST API', 'imageUrl': '/asset/ImVue-min.png', 'videoLink': 'https://www.youtube.com/embed/5ak0x3pe30A' }
]
db.sync({ force: true })
    .then(function() {
        projects.forEach(function(project) {
            Project.create(project)
                .then(console.log)
                .catch()
        })
    })
    .then(function() {
        console.log('projects created')
        User.create({ "userName": 'testAdmin', "password": 'password', "salt": 'salt' })
            .then(function() {
                console.log('admin created')
                db.sync()
            })
    })
    .catch()
