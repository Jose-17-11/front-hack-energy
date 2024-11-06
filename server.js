import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pool from "./src/database/conexion.js";

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas API
//Ruta add user
app.post("/api/addUser", async (req, res) => {
  const { nombre, apellidoP, apellidoM, edad, pais, correo, telefono, passw } =
    req.body;
  try {
    await pool.query(
      "INSERT INTO usuario (nombre, apellidoP, apellidoM, edad, pais, correo, telefono, passw) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [nombre, apellidoP, apellidoM, edad, pais, correo, telefono, passw]
    );
    res
      .status(201)
      .send({ success: true, message: "Usuario agregado correctamente" });
  } catch (error) {
    console.error("Error al agregar el usuario:", error);
    res.status(500).send({ success: false, error: error.message });
  }
});

// Ruta update user
app.put("/api/updateUser/:id", async (req, res) => {
  const id = req.params.id;
  const { nombre, apellidoP, apellidoM, edad, pais, correo, telefono } =
    req.body;

  try {
    const [result] = await pool.query(
      "UPDATE usuario SET nombre = ?, apellidoP = ?, apellidoM = ?, edad = ?, pais = ?, correo = ?, telefono = ? WHERE idUsuario = ?",
      [nombre, apellidoP, apellidoM, edad, pais, correo, telefono, id]
    );

    if (result.affectedRows > 0) {
      res
        .status(200)
        .send({ success: true, message: "Usuario actualizado correctamente" });
    } else {
      res
        .status(404)
        .send({ success: false, message: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    res.status(500).send({ success: false, error: error.message });
  }
});

//Ruta para obtener los usuarios (select para el form)
// Ruta para obtener datos de un usuario específico
app.get("/api/getUser/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM usuario WHERE idUsuario = ?",
      [id]
    );
    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res
        .status(404)
        .send({ success: false, message: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    res.status(500).send({ success: false, error: error.message });
  }
});

//Ruta para eliminar
app.delete("/api/deleteUser/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const [result] = await pool.query(
      "DELETE FROM usuario WHERE idUsuario = ?",
      [id]
    );

    if (result.affectedRows > 0) {
      res
        .status(200)
        .send({ success: true, message: "Usuario eliminado correctamente" });
    } else {
      res
        .status(404)
        .send({ success: false, message: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    res.status(500).send({ success: false, error: error.message });
  }
});

// Ruta de autenticación de usuario
app.post("/api/login", async (req, res) => {
  const { correo, passw } = req.body;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM usuario WHERE correo = ? AND passw = ?",
      [correo, passw]
    );

    if (rows.length > 0) {
      // Usuario autenticado correctamente
      res
        .status(200)
        .json({ success: true, message: "Login exitoso", user: rows[0] });
    } else {
      // Credenciales incorrectas
      res
        .status(401)
        .json({ success: false, message: "Correo o contraseña incorrectos" });
    }
  } catch (error) {
    console.error("Error al autenticar el usuario:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Iniciar Servidor node server.js
app.listen(port, () => {
  console.log(`Servidor Express corriendo en http://localhost:${port}`);
});
