const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Hypothetical user database
const usersDatabase = [
    { username: 'john_doe', password: 'password123' },
    { username: 'alice_smith', password: 'securepass' },
    // Add more users as needed
];

// Middleware to parse URL-encoded data in the request body
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (CSS in this case)
app.use(express.static(path.join(__dirname,'styles.css')));

// Route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to handle the form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if the username and password are provided
    if (!username || !password) {
        return res.status(400).send('Username and password are required ❗');
    }

    // Hypothetical authentication logic
    const user = usersDatabase.find(user => user.username === username && user.password === password);

    if (user) {
        // Authentication successful
        res.send(`Welcome, ${username} 🎶`);
    } else {
        // Authentication failed
        res.status(401).send('Invalid username or password ❗');
    }
    
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
