CREATE DATABASE restaurante;
USE restaurante;

CREATE TABLE productos_tipos(
    id_tipo int(11) NOT NULL AUTO_INCREMENT,
    nombre varchar(255) NOT NULL,
    PRIMARY KEY (id_tipo)

)


CREATE TABLE menus (
    id_menu  INTEGER NOT NULL AUTO_INCREMENT,
    nombre varchar(255) NOT NULL,
    hora_inicio time NOT NULL,
    hora_fin time NOT NULL,
    PRIMARY KEY (id_menu)
)

CREATE TABLE categoria (
    id_categoria int(11) NOT NULL AUTO_INCREMENT,
    id_menu int(11) NOT NULL,
    nombre varchar(255) NOT NULL,
    PRIMARY KEY (id_categoria),
    FOREIGN key (fk_id_menu) REFERENCES menus(id_menu)
)


CREATE TABLE productos (
    id_producto int(11) NOT NULL AUTO_INCREMENT,
    descripcion varchar(255) NOT NULL,
    precio int(11) NOT NULL,
    fk_id_tipo int(11) NOT NULL,
    fk_id_categoria int(11) NOT NULL,
    PRIMARY KEY (id_producto),
    FOREIGN KEY (fk_id_tipo) REFERENCES productos_tipos(id_tipo),
    FOREIGN KEY (fk_id_categoria) REFERENCES categoria(id_categoria)
)


