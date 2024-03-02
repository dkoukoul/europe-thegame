const express = require('express')
const router = express.Router()
// const fs = require('fs');
// const path = require('path');

// get all quiz questions
router.get('/questions', (req, res) => {
    // fs.readFile(path.join(__dirname, 'questions.json'), 'utf8', (err, data) => {
    //     if (err) {
    //         console.error(err);
    //         res.status(500).send('An error occurred while reading the file.');
    //     } else {
    //         res.json(JSON.parse(data));
    //     }
    // });
});

// get one quiz question
router.get('/questions/:id', (req, res) => {

})

// create one quiz question
router.post('/questions', (req, res) => {

})

// update one quiz question
router.put('/questions/:id', (req, res) => {

})

// delete one quiz question
router.delete('/questions/:id', (req, res) => {

})

// this one is just a test
router.get('/', (req, res) => {
    res.send('H3ll0 W0RlD')
})

module.exports = router
