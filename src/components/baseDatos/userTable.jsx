import React from "react";

async function deleteUser(id) {
  const response = await fetch(`/api/deleteUser/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    window.location.reload();
  } else {
    console.error("Error eliminando usuario");
  }
}

const UserTable = ({ users }) => {
  return (
    <div className="overflow-x-auto w-full max-w-5xl mx-auto mt-3">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Administración de Usuarios
        </h1>
        <button className="bg-pink-500 text-white px-4 py-1 rounded">
          Agregar usuario
        </button>
      </div>
      <table className="min-w-full border mt-1 text-center">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4">Id</th>
            <th className="py-2 px-4">Nombre</th>
            <th className="py-2 px-4">Apellido Paterno</th>
            <th className="py-2 px-4">Apellido Materno</th>
            <th className="py-2 px-4">Edad</th>
            <th className="py-2 px-4">País</th>
            <th className="py-2 px-4">Correo</th>
            <th className="py-2 px-4">Teléfono</th>
            <th className="py-2 px-4">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.idUsuario} className="border-b hover:bg-gray-100">
              <td className="py-2 px-4">{user.idUsuario}</td>
              <td className="py-2 px-4">{user.nombre}</td>
              <td className="py-2 px-4">{user.apellidoP}</td>
              <td className="py-2 px-4">{user.apellidoM}</td>
              <td className="py-2 px-4">{user.edad}</td>
              <td className="py-2 px-4">{user.pais}</td>
              <td className="py-2 px-4">{user.correo}</td>
              <td className="py-2 px-4">{user.telefono}</td>
              <td className="flex justify-center py-2 space-x-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded">
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => deleteUser(user.idUsuario)}
                >
                  Del
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
