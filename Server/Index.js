const express = require("express");
const cors = require("cors");
const { urlencoded } = require("express");
const mongoose = require("mongoose");

const ContSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Email: {
    type: String,
  },
  Phone: {
    type: Number,
  },
  Message:{
      type:String,
  }
});

const ContactM = mongoose.model("Contact",ContSchema);

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://Devang:DevDL_%23%40007@portfolio.2y4zp.mongodb.net/ReactApp?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then((error) => {
    console.log("Mongodb Connected");
  })
  .catch((err) => {
    console.log(err);
  });

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

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
