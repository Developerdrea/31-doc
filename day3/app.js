const express = require('express');
const app = express();
const port = 3000;

// Home Page Route
// When the user navigates to the root URL ('/'), we serve the 'index.html' file
app.get('/', (req, res) => {
    // Send the 'index.html' fiel located in the 'public' folder as the response
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// About Page Route
// When the user navigates to '/about', we read and serve the 'about.html' file
app.get('/about', (req, res) => {
    try {
        //Reads the about file and returns the data and logs if there's an error and returns 500
        const data = fs.readFileSync('public/about.html', 'utf8');
        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error reading file');
    }
});
