const express = require("express");
const pool = require("../dbSettings");

const router = express.Router();

router.get("/:id", (req, res) =>{
    // res.send(db.getUser(req.params.id))
    res.send("aaaaa");
});

router.get('/', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM users');
        const results = { 'results': (result) ? result.rows : null};
        // res.render('pages/db', results );
        res.send(results)
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
})

router.post('/',async(req,res) =>{
    try{
        const obj = req.body;
        if(obj.hasOwnProperty("name") && obj.hasOwnProperty("email") && obj['name'] && obj['email']){
            const client = await pool.connect();
            const result = await client.query("INSERT INTO users(name,email) VALUES ($1, $2);",[obj['name'],obj['email']]);
            res.send(result)
            client.release()
        }else{
            res.send("Invalid data");
        }
    }catch(err){
        console.error(err);
        res.send("Error " + err);
    }
})

module.exports = router;