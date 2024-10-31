-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: mariadb
-- Tiempo de generación: 23-02-2024 a las 03:11:12
-- Versión del servidor: 11.2.3-MariaDB-1:11.2.3+maria~ubu2204
-- Versión de PHP: 8.2.8

CREATE DATABASE lowerg;
use lowerg;

-- Base de datos: lowerg

-- Estructura de tabla `usuario`

CREATE TABLE `usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `apellidoP` varchar(30) NOT NULL,
  `apellidoM` varchar(30) NOT NULL,
  `edad` int(3) NOT NULL,
  `pais` varchar(50) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `correo` varchar(50) NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Datos para la tabla `usuario`

INSERT INTO `usuario` (`nombre`, `apellidoP`, `apellidoM`, `edad`, `pais`, `telefono`, `correo`) VALUES
('Carlos', 'Ramírez', 'Soto', 28, 'México', '5512345678', 'carlos.ramirez@example.com'),
('María', 'González', 'Lopez', 35, 'Argentina', '5412345678', 'maria.gonzalez@example.com'),
('Juan', 'Pérez', 'Hernández', 42, 'Chile', '5612345678', 'juan.perez@example.com'),
('Ana', 'Mendoza', 'Cruz', 23, 'Colombia', '5712345678', 'ana.mendoza@example.com'),
('Luis', 'Martínez', 'Díaz', 31, 'Perú', '5112345678', 'luis.martinez@example.com'),
('Sofía', 'López', 'Jiménez', 27, 'España', '3412345678', 'sofia.lopez@example.com'),
('Miguel', 'Hernández', 'Morales', 29, 'México', '5512341234', 'miguel.hernandez@example.com'),
('Laura', 'Cruz', 'Ortega', 34, 'Uruguay', '5981234567', 'laura.cruz@example.com'),
('Roberto', 'Fernández', 'García', 39, 'Ecuador', '5931234567', 'roberto.fernandez@example.com'),
('Isabel', 'Suárez', 'Paredes', 26, 'Bolivia', '5911234567', 'isabel.suarez@example.com');