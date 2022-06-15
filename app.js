const express = require("express")
const app = express()

// Serve static content in public folder
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


function logger(req, res, next){
    console.log(new Date().toISOString(), req.method, req.url);
    next()
}

app.use(logger)

// set the view engine to ejs
app.set('view engine', 'ejs');


app.get('/home', (req, res) => {

    res.render('pages/home')

})

app.get('/data', (req, res) => {
    const student = {
        id: '3820009',
        name: 'Korawit',
        major: 'CS',
        hobbies: [
            'Reading',
            'Basketball',
            'Singing'
        ]
    }
    res.render('pages/data', {student})

})


// // app.get('/users', (req, res) => {

// //     const id = req.query.id
// //     const faculty = req.query.fac
// //     console.log({id, faculty});
// //     res.send(`<h1>Get data for id: ${id} faculty: ${faculty}</h1>`)

// // })

// app.get('/users/:id/:fac', (req, res) => {

//     const id = req.params.id
//     const faculty = req.params.fac
//     console.log({id, faculty});
//     res.send(`<h1>Get data for id: ${id} faculty: ${faculty}</h1>`)
// })

// app.post('/register', (req, res) => {

//     const email = req.body.email
//     const username = req.body.username
//     console.log({email, username});
//     res.send(`Data ${email} ${username}`)

// })

// // Access home -> /
// app.get('/', (request, response) => {

//     response.send('<h1>Hello from Express</h1>')

// })

// app.get('/login', (request, response) => {

//     response.send('<h1>Sign In Form</h1>')

// })

// app.get('/logout', (request, response) => {

//     response.send('<h1>Sign Out Form</h1>')

// })

// app.get('/coc', (request, response) => {

//     response.redirect('/login')

// })

// app.get('/data', (request, response) => {

//     const data = {
//         framework: 'express',
//         version: 4
//     }

//     response.json(data)

// })

const port = process.env.PORT || 3000;

app.listen(port);


