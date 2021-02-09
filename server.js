// Dependencies

const express = require('express');
const path = require('path');
const { getMaxListeners } = require('process');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reservations
const reservations = [
    {
      name: 'Ty',
      phone: '555-5555',
      email: 'ty@gmail.com',
      id: 1
    }
]

const table = [
    {
        name: 'Ty',
        phone: '555-5555',
        email: 'ty@gmail.com',
        id: 1
      }
]

// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

// Displays all reservations
app.get('/api/reservations', (req, res) => res.json(reservations));

// Display tables already occupied 
app.get('/api/tables', (req, res) => res.json(table));


// TODO: View Tables should show like view Characters


// Todo: Display single reservation or return false


// Create New Reservation - takes in JSON input
app.post('/api/reservations', (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase();
    console.log(newReservation);
  
    reservations.push(newReservation);
    res.json(newReservation);
  });


// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));