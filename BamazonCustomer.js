// BamazonCustomer.js node application

// require the npm files
var mysql = require('mysql');
var prompt = require('prompt');

// provide the details to the mySQL bamazon database
// can use process argv to get the password instead
// 127.0.0.1
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'bamazon'
});

// invoke connection
// call the function connect() on the var connection
// pass in a function called err that will let me know if the connection is good
connection.connect(function(err) {
    // if there is an error, throw it
    if (err) throw err;
    // if no error log what threadId we are connected as
    console.log('connected as id'+ connection.threadId);
});


// invoke query method that takes two arguments: 1 string 1 function
// first argument is selecting the data from the table
// second argument is the call back
  // two pieces of data are in our callback: 1 error 1 response from the server
connection.query('SELECT * FROM products', function(err, data) {
    // if error, throw it
    if (err) throw err;
    // if not, log the data
    console.log("\n>>>WELCOME TO BAMAZON<<<");
    console.log("The following products are available:\n")

    // for loop to display all the data formatted
    for (i=0; i<data.length; i++) {
        console.log(data[i].itemID + ": " + data[i].productName + ", $" + data[i].price);
    }
});

// end the connection
connection.end();
