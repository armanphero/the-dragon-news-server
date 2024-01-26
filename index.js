const express = require('express')
const app = express();
const cors = require('cors')
const port = 3000

app.use(cors());

const categories = require('./data/categories.json');

const news = require('./data/news.json');


app.get('/', (req, res) => {
    res.send('hello from the dragon news server site')
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const singleNews = news.find(singleNews => singleNews._id === id)
    res.send(singleNews)
})

app.listen(port, ()=> {
    console.log(`The server is running on port ${port}`);
})