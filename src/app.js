const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Rutas base
app.use('/api/users', userRoutes);

app.get('/api/status', (req, res) => {
    res.json({ status: 'ok', service: 'Backend API' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});