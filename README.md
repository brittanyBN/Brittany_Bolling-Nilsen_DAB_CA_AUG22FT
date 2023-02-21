# DAB - Course Assignment 1
# Application Installation and Usage Instructions


# Environment Variables
ADMIN_USERNAME=
ADMIN_PASSWORD=
DATABASE_NAME=
DIALECT=
DIALECTMODEL=
PORT=
HOST=

# Additional Libraries/Packages
sequelize@6.28.0
mysql@2.18.1
mysql2@3.1.0
PassportJS
nodemon

# NodeJS Version Used
v19.5.0

# DATABASE
CREATE DATABASE adoptiondb;

# DATAINSERTS
INSERT INTO Species (name)
VALUES
('Dwarf Hamster'),
('Teddy Bear Hamster'),
('Jack-Russel'),
('Budgy'),
('Torouse'),
('Gold Fish'),
('Lizzard'),
('Bearder Dragon'),
('Parrot'),
('Corn Snake');

INSERT INTO Temperaments (name)
VALUES
('energetic'),
('calm'),
('lazy'),
('scared'),
('happy');

INSERT INTO Sizes (size)
VALUES
('small'),
('medium'),
('large');

INSERT INTO Roles (role)
VALUES
('admin'),
('member');

INSERT INTO Animals (Name, Birthday, SpeciesId, SizeId)
VALUES
('Coco', '2020-02-12', 1, 1),
('Ted', '2021-02-12', 2, 1),
('Coco', '2020-02-12', 3, 2),
('Everrest', '2019-02-12', 4, 1),
('Rocko', '2020-02-12', 5, 2),
('Goldy', '2023-02-12', 6, 1),
('Lizzy', '2020-02-12', 7, 2),
('Goga', '2018-02-12', 8, 3),
('Tweet Tweet', '2020-02-12', 9, 3),
('Toothless', '2017-02-12', 10, 2),
('Sophie', '2020-02-12', 1, 1),
('Teddy', '2021-02-12', 2, 1),
('Roger', '2020-02-18', 9, 3);

INSERT INTO Adoptions (adopted, animalid, userId)
VALUES
(FALSE, 1, NULL),
(FALSE, 2, NULL),
(FALSE, 3, NULL),
(FALSE, 4, NULL),
(FALSE, 5, NULL),
(FALSE, 6, NULL),
(FALSE, 7, NULL),
(TRUE, 8, 2),
(FALSE, 9, NULL),
(FALSE, 10, NULL),
(FALSE, 11, NULL),
(FALSE, 12, NULL),
(FALSE, 13, NULL);
  
INSERT INTO Users (fullName, username, password, RoleId)
VALUES
('System admin', 'Admin', 'admin1234', 1),
('User', 'User', 'user1234', 2),
('User2', 'User2', 'user1234', 2);

INSERT INTO AnimalTemperament (AnimalId, TemperamentId)
VALUES
(1, 2),
(1, 4),
 (2, 2),
 (2, 4),
 (3, 1),
 (4, 2),
 (4, 5),
 (5, 2),
 (5, 3),
 (6, 2),
 (7, 2),
 (7, 3),
 (8, 2),
 (8, 3),
 (8, 4),
 (9, 2),
 (9, 5),
 (10, 4),
 (11, 2),
 (11, 4),
 (12, 2),
 (12, 4),
 (13, 2),
 (13, 5);

# DATABASEACCESS
CREATE LOGIN dabcaowner WITH PASSWORD = 'dabca1234', DEFAULT_DATABASE = adoptiondb;
ALTER SERVER ROLE sysadmin ADD MEMBER dabcaowner;


# DATABASEQUERIES# 
