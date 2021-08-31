// Imports Section

const express = require("express");
const cors = require("cors");
const { urlencoded } = require("express");
const path = require('path');
require ('./database/DB');


const app = express();

// CORS

var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

// Basic express config

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Modules
const contact = require('./modules/Contact');
app.use('./modules/Contact', contact);

app.use(express.static(path.join(__dirname, './client/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build'))
})

// Making Port and connection for express.js

const PORT =  8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
