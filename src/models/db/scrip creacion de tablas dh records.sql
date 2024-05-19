CREATE SCHEMA IF NOT EXISTS `DH-Records` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
USE `DH-Records` ;

-- CREACION DE LA TABLA USUARIOS -- 
-- -----------------------------------------------------
-- Table `DH-Records`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DH-Records`.`users` (
   `id` INT,
   `nombreUsuario` VARCHAR(45) NOT NULL,
   `email` VARCHAR(45) NOT NULL,
   `contraseña` VARCHAR(255) NOT NULL,
   `terminosCondiciones` tinyint(1) NOT NULL,
   PRIMARY KEY (`id`)
) ENGINE = InnoDB;


-- CREACION DE LA TABLA GENEROS -- 
-- -----------------------------------------------------
-- Table `DH-Records`.`generos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DH-Records`.`generos` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- CREACION DE LA TABLA AUTORES -- 
-- -----------------------------------------------------
-- Table `DH-Records`.`autores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DH-Records`.`autores` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- CREACION DE LA TABLA PRODUCTOS -- 
-- -----------------------------------------------------
-- Table `DH-Records`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DH-Records`.`productos` (
  `id` INT NOT NULL,
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


-- -----------------------------------------------------
-- Table `DH-Records`.`imagenes_productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DH-Records`.`imagenes_productos` (
  `id` INT NOT NULL,
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