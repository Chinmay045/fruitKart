const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3300, () => {
    console.log("Server Started at port 3300");
});




