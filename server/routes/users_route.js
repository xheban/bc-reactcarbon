const express = require("express");
const pool = require("../dbSettings");
const {registerUser, loginUser} = require("../controllers/user_controller");

const router = express.Router();

router.post('/register', registerUser)
router.post('/login',loginUser)

module.exports = router;