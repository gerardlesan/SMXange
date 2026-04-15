const User = require('../models/User');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Username y password son obligatorios' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({ 
            message: 'Usuario registrado correctamente', 
            username: newUser.username 
        });

    } catch (error) {
        console.error('Error en registerUser:', error);
        res.status(500).json({ error: 'Error interno del servidor al registrar el usuario' });
    }
};

module.exports = { registerUser };