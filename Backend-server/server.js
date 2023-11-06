const express = require('express');
const app = express();
const port = 8082;
const cors = require('cors');

const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development'])
app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    knex('movie')
        .select('*')
        .then(data => {
            res.json(data);
        })
})

app.listen(port, () => {
    console.log(`this is running on ${port}`)
})