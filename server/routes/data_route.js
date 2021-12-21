const express = require("express");
const pool = require("../dbSettings");

const router = express.Router();

router.get('/',async(req,res) =>{
    try{
        // res.send(req.query.v)
        const client = await pool.connect();
        const result = await client.query("INSERT INTO test(value) VALUES ($1);",[15]);
        res.send(result)
        client.release()
    }catch(err){
        console.error(err);
        res.send("Error " + err);
    }
})
module.exports = router;