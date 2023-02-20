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

# NodeJS Version Used
v19.5.0

# DATABASE
CREATE DATABASE adoptiondb;

# DATAINSERTS
INSERT INTO Animals (Name, Species, Birthday, Temperament, Size, Adopted)
VALUES
  ('Coco', 'Dwarf Hamster', '2020-02-12', 'calm, scared', 'small', 'FALSE'),
  ('Ted', 'Tedy bear hamster', '2021-02-12', 'calm, scared', 'small', 'FALSE'),
  ('Coco', 'Jack-Russel', '2020-02-12', 'energetic', 'medium', 'FALSE'),
  ('Everrest', 'Budgy', '2019-02-12', 'calm, happy', 'small', 'FALSE'),
  ('Rocko', 'Tortouse', '2020-02-12', 'calm, lazy', 'medium', 'FALSE'),
  ('Goldy', 'Gold Fish', '2023-02-12', 'calm', 'small', 'FALSE'),
  ('Lizzy', 'Lizzard', '2020-02-12', 'calm, lazy', 'medium', 'FALSE'),
  ('Goga', 'Bearder Dragon', '2018-02-12', 'calm, lazy, scared', 'large', 'TRUE'),
  ('Tweet Tweet', 'Parrot', '2020-02-12', 'calm, happy', 'large', 'FALSE'),
  ('Toothless', 'Corn snake', '2017-02-12', 'scared', 'medium', 'FALSE'),
  ('Sophie', 'Dwarf Hamster', '2020-02-12', 'calm, scared', 'small', 'FALSE'),
  ('Teddy', 'Teddy bear hamster', '2021-02-12', 'calm, scared', 'small', 'FALSE'),
  ('Roger', 'Parrot', '2020-02-18', 'calm, happy', 'large', 'FALSE');
  
 
INSERT INTO users (fullName, username, password, role)
VALUES ('System admin', 'Admin', 'admin1234', 'admin');

# DATABASEACCESS
CREATE LOGIN dabcaowner WITH PASSWORD = 'dabca1234', DEFAULT_DATABASE = adoptiondb;
ALTER SERVER ROLE sysadmin ADD MEMBER dabcaowner;


# DATABASEQUERIES# 
