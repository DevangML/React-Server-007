// Imports Section

const express = require("express");
const cors = require("cors");
const { urlencoded } = require("express");
const path = require('path');
require ('./database/DB');
const ContactM = require('./models/Mongo')


const app = express();

// CORS

var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

// Basic express config

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sending data to MongoDB

app.post("/contact", (req, res) => {
  const cont = new ContactM({Name: req.body.name,
    Email: req.body.email,
    Phone: req.body.phone,
    Message: req.body.message});

  cont.save()
  .then((result)=>{
    res.send(result)
    console.log('Form Sent')
  })
  .catch((err)=>{
    console.log(err)
  })
  
});

// Modules

app.use(express.static(path.join(__dirname, './client/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build'))
})


// Making Port and connection for express.js

const PORT =  process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
