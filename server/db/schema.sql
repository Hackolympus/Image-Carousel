DROP DATABASE IF EXISTS thedb;

CREATE DATABASE IF NOT EXISTS thedb;

USE thedb;

CREATE TABLE IF NOT EXISTS images(
    id int NOT NULL AUTO_INCREMENT,
    image1Url varchar(1000) NOT NULL,
    image2Url varchar(1000),
    image3Url varchar(1000),
    image4Url varchar(1000),
    image5Url varchar(1000),
    image6Url varchar(1000),
    videoUrl varchar(1000),
    PRIMARY KEY (id)
);