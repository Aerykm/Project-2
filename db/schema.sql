DROP DATABASE IF EXISTS subscription_db;
CREATE DATABASE subscription_db;
USE subscription_db;

CREATE TABLE subscription 
(
	id int NOT NULL AUTO_INCREMENT,
	subsName VARCHAR(255) NOT NULL,
	subsCost VARCHAR(100) NOT NULL,
    trialPeriod BOOLEAN default false,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	dueDate DATE NOT NULL,
	PRIMARY KEY (id)
);