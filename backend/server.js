//require('dotenv').config()
    const express = require('express');
    const app = express();
    const cors = require('cors');
    const PORT = process.env.PORT || 5000;

    app.use(cors());

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

    app.get('/api/data', (req, res) => {
        // Fetch data from MongoDB and send it as a response
        res.json({ message: 'Hello from the API! SUCCESSFULL' });
    });

//console.log(process.env.NODE_ENV)