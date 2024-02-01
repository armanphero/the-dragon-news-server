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

app.get('/trending', (req, res) => {
    const trendingNews = news.filter(singleNews => singleNews.others_info.is_trending === true)
    res.send(trendingNews)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const detailNews = news.find(singleNews => singleNews._id === id);
    const similarAuthorArticles = news.filter(singleNews => singleNews.author.name === detailNews.author.name);

    res.send({ detailNews, similarAuthorArticles })
})

app.get('/sports', (req, res) => {
    const sportsNews = news.filter(singleNews => singleNews.newsCategory === "sports");
    res.send(sportsNews);
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
})