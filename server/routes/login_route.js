const express = require("express");
const pool = require("../dbSettings");

const router = express.Router();

router.get('/',async(req,res) =>{
    try{
        res.send("LandingPage");
    }catch(err){
        console.error(err);
        res.send("Error " + err);
    }
})
module.exports = router;