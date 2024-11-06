-- Servidor: mariadb
-- Versión del servidor: 11.2.3-MariaDB-1:11.2.3+maria~ubu2204
-- mariadb -uroot -ptherootpass

CREATE DATABASE lowerg;
use lowerg;

-- Base de datos: lowerg

-- Estructura de tabla usuario

CREATE TABLE `usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `apellidoP` varchar(30) NOT NULL,
  `apellidoM` varchar(30) NOT NULL,
  `edad` int(2) NOT NULL,
  `pais` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `passw` varchar(50) NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Datos para la tabla usuario

INSERT INTO `usuario` (`nombre`, `apellidoP`, `apellidoM`, `edad`, `pais`, `correo`, `telefono`, `passw`) VALUES
('Carlos', 'Ramirez', 'Soto', 28, 'México', 'carlos.ramirez@example.com', '5512345678', 'A3x7*JkL'),
('Maria', 'Gonzalez', 'Lopez', 35, 'Argentina', 'maria.gonzalez@example.com', '5412345678', 'P4q8$WnM'),
('Juan', 'Perez', 'Hernández', 42, 'Chile', 'juan.perez@example.com', '5612345678', 'T9r@5XpL'),
('Ana', 'Mendoza', 'Cruz', 23, 'Colombia', 'ana.mendoza@example.com', '5712345678', 'B2c7%LpQ'),
('Luis', 'Martinez', 'Díaz', 31, 'Perú', 'luis.martinez@example.com', '5112345678', 'Z5j8$GnM'),
('Sofia', 'Lopez', 'Jiménez', 27, 'España', 'sofia.lopez@example.com', '3412345678', 'M8f&2RpS'),
('Miguel', 'Hernandez', 'Morales', 29, 'México', 'miguel.hernandez@example.com', '5512341234', 'L7w*4TpQ'),
('Laura', 'Cruz', 'Ortega', 34, 'Uruguay', 'laura.cruz@example.com', '5981234567', 'C3d@5LpK'),
('Roberto', 'Fernandez', 'Garcia', 39, 'Ecuador', 'roberto.fernandez@example.com', '5931234567', 'J9z*3QsL'),
('Isabel', 'Suarez', 'Paredes', 26, 'Bolivia', 'isabel.suarez@example.com', '5911234567', 'K6r$8XpM');
