CREATE SCHEMA IF NOT EXISTS `DH-Records` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
USE `DH-Records` ;

-- CREACION DE LA TABLA USUARIOS -- 
-- -----------------------------------------------------
-- Table `DH-Records`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DH-Records`.`users` (
   `id` INT AUTO_INCREMENT,
   `nombreUsuario` VARCHAR(45) NOT NULL,
   `email` VARCHAR(45) NOT NULL,
   `contraseña` VARCHAR(255) NOT NULL,
   `terminosCondiciones` tinyint(1) NOT NULL,
   PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `DH-Records`.`generos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `DH-Records`.`autores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `DH-Records`.`productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NULL,
  `genero_id` INT NOT NULL,
  `descripcion` TEXT NULL,
  `autor_id` INT NOT NULL,
  `precio_costo` DECIMAL(8,2) NULL,
  `precio_venta` DECIMAL(8,2) NULL,
  `release_date` DATE NULL,
  `estilo` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_productos_generos_idx` (`genero_id` ASC) ,
  INDEX `fk_productos_autores_idx` (`autor_id` ASC) ,
  CONSTRAINT `fk_productos_generos`
    FOREIGN KEY (`genero_id`)
    REFERENCES `DH-Records`.`generos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_autores`
    FOREIGN KEY (`autor_id`)
    REFERENCES `DH-Records`.`autores` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `DH-Records`.`imagenes_productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `tipo` VARCHAR(45) NULL,
  `producto_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_imagenes_productos_productos_idx` (`producto_id` ASC),
  CONSTRAINT `fk_imagenes_productos_productos`
    FOREIGN KEY (`producto_id`)
    REFERENCES `DH-Records`.`productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- ----------------------------------------------------------POBLANDO LA BASE DE DATOS ------------------------------------------------
-- INSERT DE LA TABLA GENEROS- 
-- SENTENCIA DEL INSERT -- 
INSERT INTO `dh-records`.`generos`
(`id`, `nombre`)
VALUES
(<{id: }>, <{nombre: }>);

-- INSERT DE GENEROS -- 
INSERT INTO `dh-records`.`generos`
(`nombre`)
VALUES
('pop'), ('rock'), ('hip-hop'), ('electrónica'), ('reggaeton'), ('indie'), ('country'), ('jazz'), ('metal'), ('clásica'),
('rock nacional'), ('blues'), ('punk'), ('reggae'), ('soul');


-- INSERT DE LA TABLA AUTORES -- 
-- SENTENCIA DEL INSERT -- 
INSERT INTO `dh-records`.`autores`
(`id`, `nombre`)
VALUES
(<{id: }>, <{nombre: }>);

-- INSERT DE AUTORES -- 
INSERT INTO `dh-records`.`autores`
(`nombre`)
VALUES
('The Beatles'), ('Michael Jackson'), ('Pink Floyd'), ('Eagles'), ('AC/DC'), 
('Nirvana'), ('Fleetwood Mac'), ('Led Zeppelin'), ('Pink Floyd');


-- INSERT DE LA TABLA PRODUCTOS -- 
-- SENTENCIA DEL INSERT -- 
INSERT INTO `dh-records`.`productos`
(`id`, `titulo`, `genero_id`, `descripcion`, `autor_id`, `precio_costo`, `precio_venta`, `release_date`, `estilo`)
VALUES
(<{id: }>, <{titulo: }>, <{genero_id: }>, <{descripcion: }>, <{autor_id: }>, <{precio_costo: }>, <{precio_venta: }>, <{release_date: }>, <{estilo: }>);

-- INSERT DE PRODUCTOS -- 
INSERT INTO `dh-records`.`productos`
(`titulo`, `genero_id`, `descripcion`, `autor_id`, `precio_costo`, `precio_venta`, `release_date`, `estilo`)
VALUES
('Abbey Road', 1, 'Abbey Road es el undécimo álbum de estudio de la banda británica de rock The Beatles. Fue lanzado en 1969 y es uno de los álbumes más icónicos de la historia de la música.', 1, 1599, 2999, '1969-01-01', 'rock,pop'),
('Thriller', 1, 'Thriller es el sexto álbum de estudio del cantante estadounidense Michael Jackson, lanzado en 1982. Es el álbum más vendido de todos los tiempos.', 2, 1250, 2499, '1982-01-01', 'pop'),
('The Dark Side of the Moon', 2, 'The Dark Side of the Moon es el octavo álbum de estudio de la banda británica de rock Pink Floyd, lanzado en 1973. Es uno de los álbumes más influyentes en la historia del rock.', 3, 1875, 3499, '1973-01-01', 'rock'),
('Hotel California', 2, 'Hotel California es el quinto álbum de estudio de la banda de rock Eagles, lanzado en 1976. Es uno de los álbumes más vendidos de todos los tiempos y contiene el icónico sencillo homónimo', 4, 1425, 2799, '1976-01-01', 'rock'),
('Back in Black', 2, 'Back in Black es el séptimo álbum de estudio de la banda de rock AC/DC, lanzado en 1980. Es uno de los álbumes más vendidos de la historia y es conocido por su energía y fuerza.', 5, 1350, 2699, '1980-01-01', 'rock'),
('Nevermind', 2, 'Nevermind es el segundo álbum de estudio de la banda estadounidense Nirvana, lanzado en 1991. Es considerado uno de los álbumes más influyentes de la década de 1990 y ayudó a popularizar el género grunge.', 6, 1600, 3099, '1991-01-01', 'rock'),
('Rumours', 2, 'Rumours es el undécimo álbum de estudio de la banda británico-estadounidense Fleetwood Mac, lanzado en 1977. Es uno de los álbumes más exitosos de la historia y contiene varios sencillos populares.', 7, 1475, 2899, '1977-01-01', 'rock'),
('Sgt. Pepper''s Lonely Hearts Club Band', 1, 'Sgt. Pepper''s Lonely Hearts Club Band es el octavo álbum de estudio de The Beatles, lanzado en 1967. Es considerado uno de los álbumes más influyentes de todos los tiempos y ayudó a definir el género del rock psicodélico.', 1, 1650, 3199, '1967-01-01', 'rock'),
('Led Zeppelin IV', 2, 'Led Zeppelin IV es el cuarto álbum de estudio de la banda británica de rock Led Zeppelin, lanzado en 1971. Es uno de los álbumes más vendidos de la historia y contiene clásicos como Stairway to Heaven.', 8, 1725, 3299, '1971-01-01', 'rock'),
('The Wall', 2, 'The Wall es el undécimo álbum de estudio de la banda británica de rock Pink Floyd, lanzado en 1979. Es un álbum conceptual que trata sobre temas como el aislamiento y la alienación.', 3, 1900, 3599, '1979-01-01', 'rock');


-- INSERT DE LA TABLA IMAGENES_PRODUCTOS -- 
-- SENTENCIA DEL INSERT -- 
INSERT INTO `dh-records`.`imagenes_productos`
(`id`, `nombre`, `tipo`, `producto_id`)
VALUES
(<{id: }>, <{nombre: }>, <{tipo: }>, <{producto_id: }>);

-- INSERT DE IMAGENES_PRODUCTOS -- 
INSERT INTO `dh-records`.`imagenes_productos`
(`id`, `nombre`, `tipo`, `producto_id`)
VALUES
(1, 'imagen-1712231620361.jpg', 'jpg', 1),
(2, 'imagen-1712231723306.png', 'png', 2),
(3, 'imagen-1712231816033.png', 'png', 3),
(4, 'imagen-1712231885555.jpg', 'jpg', 4),
(5, 'imagen-1712231969140.jpg', 'jpg', 5),
(6, 'imagen-1712232037398.jpg', 'jpg', 6),
(7, 'imagen-1712232099852.png', 'png', 7),
(8, 'imagen-1712232176060.jpg', 'jpg', 8),
(9, 'imagen-1712232233566.jpg', 'jpg', 9),
(10, 'imagen-1712232293259.png', 'png', 10);


