// Dependencies

var inquirer = require('inquirer');
var mysql = require('mysql');

// Establish connection to localhost

var connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'bamazon'
});


// Create function to make sure user enters positive numbers

function inputNumber(value) {
    var integer = Number.isInteger(parseFloat(value));
    var sign = Math.sign(value);

    if (integer && (sign === 1)){
        return true;
    } else{
        return 'Please enter a whole number.';
    }
}

// inquirer to prompt user to input product id and desired quantity to rent

function inventoryRent() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'item_id',
            message: 'Please enter the item ID you wish to rent.',
            validate: inputNumber,
            filter: Number
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many videos would you like to rent?',
            validate: inputNumber,
            filter: Number
        }
    ]).then(function(input){
        var item = input.item_id;
        var quantity = input.quantity;

        // query bamazon database to confirm there is enough quantity for desired item ID selection
        var queryString = 'SELECT * FROM products WHERE ?';

        connection.query(queryString, {item_id: item}, function(err,data){
            if (err) throw err;

            // prompt user to select valid Item ID
            if (data.length === 0) {
                console.log("Invalid Item ID. Please select a valid Item ID. And I'll need to see your membership card.");
                displayInventory();
            } else {
                var productData = data[0];

                // if the desired product is in stock then start to process order
                if (quantity <= productData.stock_quantity) {
                    console.log('The video is in stock! Processing order. ');

                    // query to update stock quantity
                    var updateQueryString = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;
                    console.log(updateQueryString);
                    connection.query(updateQueryString, function(err, data){
                        if (err) throw err;

                        console.log('Your order has been placed! The total amount is $' + productData.price * quantity);
                        console.log('Thank you for visiting Blockbuster!');
                        console.log('\n-------------------------------------------------------------------------------\n');

                        connection.end();
                    })
                } else {
                    console.log('Sorry, all of the videos are sold out.');
                    console.log('The person with the video should be returning it today to avoid a late charge. You can come back later if you want...');
                    console.log('\n----------------------------------------------------------------------------------\n');

                    displayInventory();
                }
            }
        })
    })
}

// displayInventory will connect with the bamazon database and display the inventory to the console

function displayInventory() {

    queryString = 'SELECT * FROM products';

    connection.query(queryString, function(err, data){
        if (err) throw err;

        console.log('Available Inventory: ');
        console.log('------------------\n');

       var inv = '';
       for (var i = 0; i < data.length; i++) {
           inv = '';
           inv += 'Item ID: ' + data[i].item_id + ' // ';
           inv += 'Product Name: ' + data[i].product_name + ' // ';
           inv += 'Department: ' + data[i].department_name + ' // ';
           inv += 'Price: ' + data[i].price + '\n';

           console.log(inv);
       }
           console.log("--------------------------------------------\n");

           // prompt user for Item ID and amount they want to rent
           inventoryRent();
    })
}

// creating function to run app
function startApp() {

    // display inventory
   displayInventory();
}

// calling function to start app
startApp();