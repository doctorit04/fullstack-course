require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const cors = require('cors');

const userRoutes = require('./routes/user.route');
const authRoutes = require('./routes/auth.route');
const damVolumeRoutes = require('./routes/damvolume.route');


app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/damvolume', damVolumeRoutes);

app.get('/', (req, res) => {
  res.send('REST API is working!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});