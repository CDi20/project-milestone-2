const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS, JS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// POST route to handle form submissions
app.post('/submit', (req, res) => {
    const formData = req.body;
    console.log('Form Data:', formData); // Logs form data to the console
    
    // Optionally, store the data in a database or process it here

    // Send a response to the client
    res.send('<h1>Form Submitted Successfully!</h1>');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
