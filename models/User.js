const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
}, {
    timestamps: true // Esto guarda automáticamente la fecha de creación
});

module.exports = mongoose.model('User', UserSchema);