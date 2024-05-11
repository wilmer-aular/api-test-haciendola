# api-test-haciendola

Crear una base de datos llamada haciendola

crear 2 tablas en la base de datos

CREATE TABLE haciendola.users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
 );

CREATE TABLE haciendola.products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    handle VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    sku BIGINT NOT NULL,
    grams BIGINT NOT NULL,
    stock BIGINT NOT NULL,
    price BIGINT NOT NULL,
    compare_price BIGINT NOT NULL,
    barcode BIGINT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

utilizar node v18.17.0

ejecutar npm i

run 
# npm start