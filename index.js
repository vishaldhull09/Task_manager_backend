const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const connectDB = require('./utils/db');
const setupRoutes = require('./components/setupRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
    res.send('Hello World');
});

setupRoutes(app);

app.listen(3000, async () => {
    await connectDB();
    console.log('Server is running on port 3000');
});

