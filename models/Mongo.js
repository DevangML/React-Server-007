const mongoose = require("mongoose");


let ContSchema = new mongoose.Schema({
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

const ContactM = mongoose.model("contact",ContSchema);

module.exports = ContactM;