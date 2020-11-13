const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('index', { myVar: 'woohoo'})
    res.status(200)
})

app.get('/about', function(req, res) {
    res.render('about')
})

app.get('/blog/:date', (req, res) => {
    res.render('blog', { date: req.params.date })
})

app.listen(8000, () => {
    console.log('server started!')
})