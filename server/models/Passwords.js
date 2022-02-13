const { Schema, model } = require('mongoose');

const passwordSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    titlesPassword: {
        type: String,
        required: true,
    },
})

const Passwords = model('Passwords', passwordSchema);

module.exports = Passwords;