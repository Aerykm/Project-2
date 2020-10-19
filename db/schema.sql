DROP DATABASE IF EXISTS subscription_db;
CREATE DATABASE subscription_db;
USE subscription_db;

CREATE TABLE bills 
(
	id int NOT NULL AUTO_INCREMENT,
	sub_name VARCHAR(255) NOT NULL,
	sub_cost INT(100) NOT NULL,
    trial_period BOOLEAN default false,
	due_date DATE NOT NULL,
	PRIMARY KEY (id)
);