const express = require('express');
const router = express.Router()

router.post("/contact", (req, res) => {
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

module.exports = router 