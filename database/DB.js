const mongoose = require("mongoose");

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