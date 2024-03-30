//create we server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const port = 3000;
const commentsPath = path.join(__dirname, 'comments.json');
app.use(bodyParser.json());

//get all comments
app.get('/comments', (req, res) => {
    fs.readFile(commentsPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('An error occurred while reading the comments file');
        } else {
            res.status(200).send(JSON.parse(data));
        }
    });
});

//create a new comment
app.post('/comments', (req, res) => {
    fs.readFile(commentsPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('An error occurred while reading the comments file');
        } else {
            const comments = JSON.parse(data);
            const newComment = req.body;
            newComment.id = comments.length + 1;
            comments.push(newComment);
            fs.writeFile(commentsPath, JSON.stringify(comments), (err) => {
                if (err) {
                    res.status(500).send('An error occurred while writing to the comments file');
                } else {
                    res.status(201).send(newComment);
                }
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

//create a new comment
app.post('/comments', (req, res) => {
    fs.readFile(commentsPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('An error occurred while reading the comments file');
        } else {
            const comments = JSON.parse(data);
            const newComment = req.body;
            newComment.id = comments.length + 1;
            comments.push(newComment);
            fs.writeFile(commentsPath, JSON.stringify(comments), (err) => {
                if (err) {
                    res.status(500).send('An error occurred while writing to the comments file');
                } else {
                    res.status(201).send(newComment);
                }
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
// Path: experience