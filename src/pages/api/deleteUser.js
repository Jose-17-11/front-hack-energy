// src/pages/api/deleteUser.js
import pool from "../../../dataBase.js";

export async function del({ params, request }) {
  try {
    const url = new URL(request.url);
    const idUsuario = url.pathname.split("/").pop(); // Extrae el id del URL

    await pool.query("DELETE FROM usuario WHERE idUsuario = ?", [idUsuario]);
    return new Response(
      JSON.stringify({ message: "Usuario eliminado correctamente" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error eliminando usuario" }),
      {
        status: 500,
      }
    );
  }
}
