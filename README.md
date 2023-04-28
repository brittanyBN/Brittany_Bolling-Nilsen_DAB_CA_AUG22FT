# DAB - Course Assignment 1

This was an assignment for the course Databases Noroff. The views files were already created, and I completed the entire backend of the application. 
# Application Installation and Usage Instructions
To run this project, you will need a web browser and a local web server.

Clone or download the repository to your local machine.
Run npm install to install the required packages and dependencies.
Create a .env file in the root directory, use the .env-example file as a template.
Run npm start to start the server.
Open the browser and navigate to http://localhost:PORT Replace PORT with desired PORT number.

# Environment Variables
- ADMIN_USERNAME=
- ADMIN_PASSWORD=
- DATABASE_NAME=
- DIALECT=
- DIALECTMODEL=
- PORT=
- HOST=

# Additional Libraries/Packages
- sequelize@6.28.0
- mysql@2.18.1
- mysql2@3.1.0
- PassportJS
- express-session
- connect-sqlite3
- nodemon
- dotenv

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

INSERT INTO Animals (Name, Birthday, Adopted, SpeciesId, SizeId)
VALUES
('Coco', '2020-02-12', FALSE, 1, 1),
('Ted', '2021-02-12', FALSE, 2, 1),
('Coco', '2020-02-12', FALSE, 3, 2),
('Everrest', '2019-02-12', FALSE, 4, 1),
('Rocko', '2020-02-12', FALSE, 5, 2),
('Goldy', '2023-02-12', FALSE, 6, 1),
('Lizzy', '2020-02-12', FALSE,7, 2),
('Goga', '2018-02-12', TRUE, 8, 3),
('Tweet Tweet', '2020-02-12', FALSE, 9, 3),
('Toothless', '2017-02-12', FALSE, 10, 2),
('Sophie', '2020-02-12', FALSE, 1, 1),
('Teddy', '2021-02-12', FALSE, 2, 1),
('Roger', '2020-02-18', FALSE, 9, 3);
  
INSERT INTO Users (firstname, lastname, username, password, RoleId)
VALUES
('System', 'admin', 'Admin', 'admin1234', 1),
('User', 'One', 'User', 'user1234', 2),
('User2', 'Two', 'User2', 'user1234', 2);

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
CREATE User 'dabcaowner'@'127.0.0.1' IDENTIFIED BY 'dabca1234';
GRANT ALL PRIVILEGES ON adoptiondb.* TO 'dabcaowner'@'127.0.0.1' WITH GRANT OPTION;


# DATABASEQUERIES# 
1. Return the most popular animal name.
   SELECT * FROM adoptiondb.Animals;
   SELECT name, COUNT(*) as count
   FROM animals
   GROUP BY name
   ORDER BY count DESC
   LIMIT 1;

2. Return a list of animals that have been adopted, and the name of the user that adopted them.
   SELECT Animals.name, Users.username
   FROM Animals
   JOIN Users ON Animals.UserId = Users.id
   WHERE Animals.UserId IS NOT NULL;

3. Return a list of all the animals, sorted by age from youngest to oldest.
   SELECT * FROM adoptiondb.Animals;
   SELECT name, birthday
   FROM animals
   ORDER BY birthday;

4. Return all the animals born between 31 December 2017 and 31 December 2020.
   SELECT *
   FROM animals
   WHERE birthday BETWEEN '2017-12-31' AND '2020-12-31';

5. Return the number of animals per size (return each size and the number).
   SELECT Sizes.size, COUNT(*) AS number_of_animals
   FROM Animals
   JOIN Sizes ON Animals.SizeId = Sizes.id
   GROUP BY Sizes.size;
