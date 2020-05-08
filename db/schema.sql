DROP DATABASE IF EXISTS burgers_db;

-- Created the DB "wizard_schools_db" (only works on local connections)
CREATE DATABASE burgers_db;

-- Use the DB wizard_schools_db for all the rest of the script
USE burgers_db;

-- Created the table "schools"
CREATE TABLE burgers (
  id INTEGER AUTO_INCREMENT NOT NULL,
  burger_name varchar(255) NOT NULL,
  devoured Boolean DEFAULT false
  PRIMARY KEY(id)
);

INSERT INTO burgers (burger_name) VALUES ("cheeseburger");
INSERT INTO burgers (burger_name) VALUES ("bacon burger");

