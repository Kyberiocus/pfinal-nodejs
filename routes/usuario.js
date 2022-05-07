const express = require('express');
const jwt = require('jsonwebtoken');
const usuario = express.Router();
const db = require('../config/database');

usuario.post("/login", async (req, res, next) => {
    const { name_usuarios, password_usuario } = req.body;
    const query = `SELECT * FROM usuarios WHERE name_usuarios = '${name_usuarios}' AND password_usuarios = '${password_usuario}';`;
    const rows = await db.query(query);

    if(name_usuarios && password_usuario){
        if(rows.length == 1){
            const token = jwt.sign({
                id_usuarios: rows[0].id_usuarios,
                name_usuarios: rows[0].name_usuarios
            }, "debugkey");
            return res.status(200).json({code: 200, message: token});
        }
        else{
            return res.status(401).json({code: 401, message: "Usuario y/o contraseña incorrectos"});
        }
    }
    return res.status(500).json({code: 500, message: "Campos incompletos"});
});

module.exports = usuario;