import pool from "../../database/conexion";

export async function put({ request }) {
  const {
    idUsuario,
    nombre,
    apellidoP,
    apellidoM,
    edad,
    pais,
    correo,
    telefono,
  } = await request.json();

  try {
    const [result] = await pool.query(
      "UPDATE usuario SET nombre = ?, apellidoP = ?, apellidoM = ?, edad = ?, pais = ?, correo = ?, telefono = ? WHERE idUsuario = ?",
      [nombre, apellidoP, apellidoM, edad, pais, correo, telefono, idUsuario]
    );

    if (result.affectedRows > 0) {
      return new Response("Usuario actualizado correctamente", { status: 200 });
    } else {
      return new Response("Usuario no encontrado", { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return new Response("Error al actualizar el usuario", { status: 500 });
  }
}
