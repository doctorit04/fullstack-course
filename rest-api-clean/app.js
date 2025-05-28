require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const userRoutes = require('./routes/user.route');

app.use(express.json());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('REST API is working!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});