CREATE DATABASE IF NOT EXISTS AGENDA_DB;

USE AGENDA_db;

CREATE TABLE contacts(
  id INT AUTO_INCREMENT PRIMARY KEY,
  identification_number INT(20) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  second_name VARCHAR(50),
  first_lastname VARCHAR(50) NOT NULL,
  second_lastname VARCHAR(50) NOT NULL,
  phone_numbers JSON,
  email_addresses JSON 
);

describe contacts;

INSERT into contacts VALUES (1,'1000','Diego','david','jimenez','beltran','1001','dsjb@gmail.com');
