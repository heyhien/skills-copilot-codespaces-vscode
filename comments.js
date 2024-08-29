// Create web server
// Step 1: Import the required module
const express = require('express');

// Step 2: Create an instance of Express
const app = express();

// Step 3: Define a route handler
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Step 4: Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});