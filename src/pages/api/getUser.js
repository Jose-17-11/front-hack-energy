import pool from "../../database/conexion";

export async function get(context) {
  const { id } = context.query;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM usuario WHERE idUsuario = ?",
      [id]
    );
    if (rows.length > 0) {
      return new Response(JSON.stringify(rows[0]), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response("Usuario no encontrado", { status: 404 });
    }
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    return new Response("Error al obtener el usuario", { status: 500 });
  }
}
