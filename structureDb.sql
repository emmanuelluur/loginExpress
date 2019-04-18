CREATE DATABASE IF NOT EXISTS my_app DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish2_ci;
USE my_app;

CREATE TABLE IF NOT EXISTS tbl_users
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, -- primary key column
    username varchar(60),
    pass text NOT NULL,
    user_create DATE,
    createdAt DATETIME,
    updatedAt DATETIME
    -- specify more columns here
)ENGINE=InnoDB DEFAULT CHARSET=utf8;