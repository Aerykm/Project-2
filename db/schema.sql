DROP DATABASE IF EXISTS subscription_db;
CREATE DATABASE subscription_db;
USE subscription_db;

CREATE TABLE bills 
(
	id int NOT NULL AUTO_INCREMENT,
	subs_name VARCHAR(255) NOT NULL,
	subs_cost VARCHAR(100) NOT NULL,
    trial_period BOOLEAN default false,
	due_date DATE NOT NULL,
	PRIMARY KEY (id)
);