const express = require('express');
const router = express.Router();

router.get('/getuser', async (req, res)=>{
    try{
      
      res.status(200).send("done")
      
    }
    catch(error) {
      console.error(error.message);
      res.status(500).send("Some Error occured");
    }
  })
  
  module.exports = router