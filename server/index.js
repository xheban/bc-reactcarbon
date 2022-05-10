// require('dotenv').config({path:'./server/.env'})
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

const DIST_DIR = path.join(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW
app.use(express.static(DIST_DIR)); // NEW

app.get('/', (req, res) => {
    res.sendFile(HTML_FILE); // EDIT
});

const dataRouter = require("./routes/data_route");
const usersRouter = require("./routes/users_route");

app.use('/api/users', usersRouter);
app.use('/api/data',dataRouter);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
