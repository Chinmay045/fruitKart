const express = require('express');
const router = express.Router();

const data = {
    productItems: [
        {
            id: "1",
            name: "Apple Fresh",
            price: 499,
            image: ""
        },
        {
            id: "2",
            name: "Banana",
            price: 99,
            image: ""
        },
        {
            id: "3",
            name: "Maango",
            price: 299,
            image: ""
        },
        {
            id: "4",
            name: "Kiwi",
            price: 699,
            image: ""
        },
        {
            id: "5",
            name: "Pinapple",
            price: 199,
            image: ""
        }
    ]
}

router.get('/products', (req, res) => {
    res.json(data);
});

module.exports = router;
