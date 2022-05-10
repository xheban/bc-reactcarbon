const express = require("express");
const {getData} = require ('../controllers/data_controller.js')

const router = express.Router();

router.post('/', getData);
module.exports = router;