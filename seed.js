let db = require('./server/db/models/index');
let User = db.model('user');
let Project = db.model('project');

let projects = [
  {
    'deploy': 'https://tranquil-brushlands-88316.herokuapp.com/', 'description': 'This is my current star project. Created this meme-generator with just jQuery and HTML5 Canvas API in 2 weeks.', 'gitHub' : 'https://github.com/clockwrk/jquery-meme-generator', 'name': 'Meme Generator', 'techList': 'HTML5 Canvas API, jQuery,AngularJS, ExpressJS, JavaScript, CSS, Heroku', 'imageUrl': '/asset/meme-generator.png', 'videoLink': ''
  },
    { 'deploy': 'https://desolate-castle-17166.herokuapp.com/', 'description': 'Created this dashboard to visually show changes in various Nigerian crop prices, production and consumption levels changed over time', 'gitHub': 'https://github.com/clockwrk/releaf-programming-challenge', 'name': 'Nigerian Crop DashBoard', 'techList': 'JQuery ,FusionCharts , JavaScript, HTML5, CSS, AngularJS, PostgreSQL, Heroku', 'imageUrl': '/asset/nigeria-crop-dashboard.gif', 'videoLink': '' },
    { 'deploy': 'https://markey.herokuapp.com/', 'description': ' This is an e-commerce site that simulates buying tickets to concerts.', 'gitHub': 'https://github.com/gewl/markey', 'name': 'Markey', 'techList': ' JavaScript, HTML5, CSS, AngularJS, PostgreSQL, Heroku, REST API', 'imageUrl': '/asset/Markey-min.png', 'videoLink': '' },
    { 'deploy': 'https://radiant-cliffs-28831.herokuapp.com', 'description': 'This was my capstone team project at Fullstack Academy. Imvue is used to create an art project from a android device and save it to a specific geolocation.', 'gitHub': 'https://github.com/clockwrk/ImVue', 'name': 'ImVue', 'techList': ' Canvas element, Google Maps API ,JavasSript, CSS, AngularJS, PostgreSQL, Heroku, REST API', 'imageUrl': '/asset/ImVue-min.png', 'videoLink': 'https://www.youtube.com/embed/5ak0x3pe30A' },
    {
      'deploy': 'https://aqueous-woodland-81612.herokuapp.com/', 'description': 'I built this over a weekend for http://www.techtalentpipeline.nyc/. It is a simple AngularJS tic tac toe game against another player. Adding a computer opponent soon!', 'gitHub' : 'https://github.com/clockwrk/tech-pipeline-submission', 'name': 'Tic Tech Toe', 'techList': 'AngularJS, ExpressJS, JavaScript, CSS, Heroku', 'imageUrl': '/asset/tic-tech-toe.gif', 'videoLink': ''
    }
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
