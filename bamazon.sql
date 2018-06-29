CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER(11) NOT NULL,
    PRIMARY KEY (item_id)

);

INSERT INTO products (product_name, department_name, price, stock_quantity)

VALUES ('The Matrix', 'Action', 10.99, 18),
        ('American Beauty', 'Comedy', 10.99, 12),
        ('Fight Club', 'Action', 9.99, 11),
        ('The Sixth Sense', 'Horror', 9.99, 13),
        ('Being John Malkovich', 'Comedy', 9.99, 10),
        ('The Green Mile', 'Drama', 15.99, 12),
        ('The Blair Witch Project', 'Horror', 9.99, 10),
        ('Star Wars Episode 1','Action', 10.00, 12),
        ('Office Space','Comedy', 9.99, 10),
        ('Three Kings', 'Action', 8.99, 11),
        ('The Talented Mr. Ripley', 'Romance', 8.99, 15),
        ('American Pie', 'Comedy', 9.99, 13),
        ('Sleepy Hollow','Horror', 8.99, 14),
        ('10 Things I Hate About You', 'Comedy', 9.99, 12),
        ('Dogma', 'Comedy', 8.99, 10),
        ('The Mummy', 'Action', 10.99, 10),
        ('The Boondock Saints', 'Action', 9.99, 10),
        ('October Sky', 'Drama', 9.99, 10),
        ('Big Daddy', 'Comedy', 10.99, 11),
        ('Man on the Moon', 'Comedy', 8.99, 10),
        ('Toy Story 2', 'Comedy', 10.99, 12);