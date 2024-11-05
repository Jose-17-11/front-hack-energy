import pool from "../../database/conexion";

export async function del(context) {
  const { id } = context.query;

  try {
    const [result] = await pool.query(
      "DELETE FROM usuario WHERE idUsuario = ?",
      [id]
    );
    if (result.affectedRows > 0) {
      return new Response("Usuario eliminado correctamente", { status: 200 });
    } else {
      return new Response("Usuario no encontrado", { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return new Response("Error al eliminar el usuario", { status: 500 });
  }
}
