import pool from "../../database/conexion";

export async function post({ request }) {
  try {
    const data = await request.json();
    console.log(data); // Esto debería mostrar todos los campos, incluyendo 'passw'

    const {
      nombre,
      apellidoP,
      apellidoM,
      edad,
      pais,
      correo,
      telefono,
      passw,
    } = data;

    await pool.query(
      "INSERT INTO usuario (nombre, apellidoP, apellidoM, edad, pais, correo, telefono, passw) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [nombre, apellidoP, apellidoM, edad, pais, correo, telefono, passw]
    );

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error al agregar el usuario:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
