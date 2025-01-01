const express = require(express);
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to goal Tracking API!')
});

app.liten(PORT, ()=> console.log('Server running on port ${PORT}'));