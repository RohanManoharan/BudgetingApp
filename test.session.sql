-- @block
CREATE TABLE Users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    pwd TEXT,
    userName VARCHAR(16) 
);
-- @block
