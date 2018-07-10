## Overview:

Bamazon is a command line customer interface application utilizing node.js, inquirer npm, mysql npm, as well as a MySQL database. Titled bamazon, the application represents a dark web version of an existing rogue Blockbuster operation, that only provides movies from the year 1999. 

### Set Up: 

In order to run the app, the MySQL database should be set up on your computer. If you do not already have MySQL then you can visit the website in order to install and get set up. Once you have MySQL on your computer, you will be able to create the Bamazon database from the bamazon.sql file. Once you run the bamazon.sql code within MySQL, the proper database will be created and you will be able to proceed to the customer interface. Just in case you may also want to manually install the inquirer npm and mysql npm if all else fails.

### Customer Interface:

The customer interface allows the customer to view the current inventory of Blockbuster videos, which include the item IDs, name, department (genre), and price. The customer is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

Technologies Utilized: Node.js and MySQL

Below is a link to Google Doc with visual screen shots

[Google Doc](https://docs.google.com/document/d/1a4lrum56XMuGEv88xwHGveW13I7abAggQvSw2wKfy7I/edit?usp=sharing)
