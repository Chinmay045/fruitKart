const express = require('express');
const router = express.Router();

const data = {
    productItems: [
        {
            id: "1",
            name: "Apple Fresh",
            price: 499,
            image: "./images/apple.jpg"
        },
        {
            id: "2",
            name: "Banana",
            price: 99,
            image: "./images/banana.jpg"
        },
        {
            id: "3",
            name: "Maango",
            price: 299,
            image: "./images/kiwi.jpg"
        },
        {
            id: "4",
            name: "Kiwi",
            price: 699,
            image: "./images/mango.jpg"
        },
        {
            id: "5",
            name: "Pinapple",
            price: 199,
            image: "./images/pineapple.jpg"
        }
    ]
}

router.get('/products', (req, res) => {
    res.json(data);
});

module.exports = router;
