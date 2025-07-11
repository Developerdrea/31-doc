const fs = require('fs');
module.exports = function add(a, b){
   // let sum = a+b;
    return a+b;
   // console.log(sum);
}

module.exports = function subtract(c,d){
  //  let subtraction = c-d;
    return c-d;
   // console.log(subtraction);
}


//fs practice
app.post('/contact', (req, res) => {
    // Destructure the 'name', 'email', and 'message' from the request body
    const { name, email, message, date } = req.body;

    // Format the form data into a string to be written to the data.txt file
    const data = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nDate: ${date}\n\n`;

    // Define the path to the 'data.txt' file where we'll store the contact messages
    const dataFilePath = path.join(__dirname, 'data.txt');

    // Append method the formatted data to the 'data.txt' file
    // If the file doesn't exist, it will be created
    fs.appendFileSync(dataFilePath, data);

    // Respond with a success message indicating that the message was saved
    res.send('Message sent successfully!');
});

// Start the Express server and listen for incoming requests on the specified port
app.listen(port, () => {
    // Log a message to the console indicating the server is running and listening on the given port
    console.log(`Server started on port ${port}`);
});

//Note: Remember to create html files later