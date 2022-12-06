// const express = require('express');
import express from 'express'
import { getRestaurants } from './api/restaurants.js';
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

app.get('/', (req, res) => {
    res.render('home.ejs', {
        title: "Accueil",
        list: restaurants
    })
})

app.get('/about', (req, res) => {
    res.render('about.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})