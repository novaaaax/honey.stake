const mongoose = require('mongoose');
const db = require('../models');
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/solvestakingdb"
    );

const exampleUser = [
    {
        first_name: "Bob",
        last_name: "Dylan",
        email: "bobdylan@bobdylan.com",
        password: "12345678",
        date: new Date(Date.now())
    }
]

module.exports = exampleUser;