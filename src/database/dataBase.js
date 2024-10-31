import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost", // Nombre del servicio del contenedor en el archivo docker-compose.yml
  port: "3310",
  user: "root",
  password: "therootpass",
  database: "usuario",
});

export default pool;
