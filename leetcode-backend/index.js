const express = require('express');
require('dotenv').config();
const app = express();
const getData = require('./routes/routes')
const PORT = process.env.PORT || 3000;

app.use('/api', getData);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
