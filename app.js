// const express = require('express');
import express from 'express'
// import css from './css/style_resto.css'
import { getRestaurants , getRestaurant } from './api/restaurants.js';
// const { getRestaurants } = require('./api/restaurants');
const app = express()
const port = 3000

const restaurants = [
    {
        name: "spicy",
        address: "Le Lamentin"
    },
    {
        name: "spicy2",
        address: "Le Lamentin"
    },
    {
        name: "spicy3",
        address: "Le Lamentin"
    },
    {
        name: "good time",
        address: "Le Lamentin"
    }
]

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', async (req, res) => {
    const data = await getRestaurants(req)
    console.log(data)
    res.render('./home.ejs', {
        title: "Accueil",
        list: data
    })
})

app.get ('/restaurant', async (req ,res) => {
    const data = await getRestaurant(req.query.id)
    console.log(data)
    res.render('restaurants.ejs', {
        title: "restaurant",
        list: data
    })
})

app.get('/about', (req, res) => {
    res.render('about.ejs')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})