const express = require('express');
const empleado = express.Router();
const db = require('../config/database');

empleado.post("/", async (req, res, next) => {
    const { name_empleado, lastname_empleado, tel_empleado, email_empleado, address_empleado } = req.body;
    if(name_empleado && lastname_empleado && tel_empleado && email_empleado && address_empleado){
        let query = "INSERT INTO empleados(name_empleado, lastname_empleado, tel_empleado, email_empleado, address_empleado)";
        query += ` VALUES ('${name_empleado}', '${lastname_empleado}', '${tel_empleado}', '${email_empleado}', '${address_empleado}')`;
        const rows = await db.query(query);
        
        if(rows.affectedRows==1){
            return res.status(201).json({ code:201, message: "Empleado insertado correctamente"});
        }

        return res.status(500).json({ code:500, message: "Ocurrio un error"});
    }
    return res.status(500).json({ code: 500, message: "Campos incompletos"})
});

empleado.delete("/:id([0-9]{1,3})", async (req, res, next) => {
    const query = `DELETE FROM empleados WHERE id_empleado=${req.params.id}`;

    const rows = await db.query(query);
    if(rows.affectedRows == 1){
        return res.status(200).json({code: 200, message: "Empleado borrado correctamente"});
    }
    return res.status(404).json({code: 404, message: "Empleado no encontrado"});
});

empleado.put("/:id([0-9]{1,3})", async (req, res, next) => {
    const { name_empleado, lastname_empleado, tel_empleado, email_empleado, address_empleado } = req.body;

    if(name_empleado && lastname_empleado && tel_empleado && email_empleado && address_empleado){
        let query = `UPDATE empleados SET name_empleado='${name_empleado}', lastname_empleado='${lastname_empleado}', `
        query += `tel_empleado='${tel_empleado}', email_empleado='${email_empleado}', address_empleado='${address_empleado}' WHERE id_empleado=${req.params.id};`;

        const rows = await db.query(query);
        if(rows.affectedRows==1){
            return res.status(200).json({ code:200, message: "Empleado actualizado correctamente"});
        }

        return res.status(500).json({ code:500, message: "Ocurrio un error"});
    }
    return res.status(500).json({ code: 500, message: "Campos incompletos"})
});

empleado.get("/", async (req, res, next) => {
    const empl = await db.query("SELECT * FROM empleados");
    return res.status(200).json({ code: 200, message: empl});
});

module.exports = empleado;