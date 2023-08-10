import express from 'express'
import url from 'url'

var app = express()

app.get('/', (req, res) =>
{
    res.send("home page")
})  

app.post('/about', (req, res) =>
{
    var data = url.parse(req.url, true).query
    console.log(data.id);
    res.send(data)
})

app.listen(5000)
console.log('servetr on');
