
/*
-----------------------------------------
 File: db.js
 Andara Pintuge Pinto - 200574919
 Lathindu Welhenage 200574922
 Date: 17th March 2024
-----------------------------------------
*/


const mongoose = require("mongoose");
const { Books } = require('./src/models/model');
const { User } = require('./src/models/model');

// MongoDB connection URI
const MONGOURI = "mongodb+srv://menuka:menuka@bookapp.evejq7p.mongodb.net/?retryWrites=true&w=majority&appName=bookApp";

// Async function to initiate MongoDB connection
const InitiateMongoServer = async () => {
    try {
        // Connecting to MongoDB
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Connected to Database!");

        // Sample books data
        const favBooks = [
            [
                {
                    "BooksName": "To Kill a Mockingbird (Comic Book Edition)",
                    "ISBN": "978-0061120084",
                    "Rating": 4.5,
                    "Author": "Harper Lee",
                    "Genre": "Fiction"
                },
                {
                    "BooksName": "1984: The Graphic Novel",
                    "ISBN": "978-0451524935",
                    "Rating": 4.3,
                    "Author": "George Orwell",
                    "Genre": "Science Fiction"
                },
                {
                    "BooksName": "The Great Gatsby (Graphic Novel)",
                    "ISBN": "978-0743273565",
                    "Rating": 4.2,
                    "Author": "F. Scott Fitzgerald",
                    "Genre": "Classics"
                },
                {
                    "BooksName": "Pride and Prejudice (Comic Series)",
                    "ISBN": "978-0141439518",
                    "Rating": 4.6,
                    "Author": "Jane Austen",
                    "Genre": "Romance"
                },
                {
                    "BooksName": "The Hobbit (Graphic Novel)",
                    "ISBN": "978-0345339683",
                    "Rating": 4.7,
                    "Author": "J.R.R. Tolkien",
                    "Genre": "Fantasy"
                },
                {
                    "BooksName": "The Catcher in the Rye (Comic Book)",
                    "ISBN": "978-0316769174",
                    "Rating": 4.0,
                    "Author": "J.D. Salinger",
                    "Genre": "Coming of Age"
                },
                {
                    "BooksName": "The Lord of the Rings (Graphic Novel Series)",
                    "ISBN": "978-0544003415",
                    "Rating": 4.9,
                    "Author": "J.R.R. Tolkien",
                    "Genre": "Fantasy"
                },
                {
                    "BooksName": "Harry Potter and the Sorcerer's Stone (Comic Book)",
                    "ISBN": "978-0590353427",
                    "Rating": 4.8,
                    "Author": "J.K. Rowling",
                    "Genre": "Fantasy"
                },
                {
                    "BooksName": "The Da Vinci Code (Graphic Novel)",
                    "ISBN": "978-0307474278",
                    "Rating": 3.8,
                    "Author": "Dan Brown",
                    "Genre": "Mystery"
                },
                {
                    "BooksName": "The Hunger Games (Comic Series)",
                    "ISBN": "978-0439023528",
                    "Rating": 4.2,
                    "Author": "Suzanne Collins",
                    "Genre": "Dystopian"
                },
                {
                    "BooksName": "The Shining (Graphic Novel)",
                    "ISBN": "978-0307743657",
                    "Rating": 4.3,
                    "Author": "Stephen King",
                    "Genre": "Horror"
                },
                {
                    "BooksName": "Gone with the Wind (Comic Book Edition)",
                    "ISBN": "978-1451635621",
                    "Rating": 4.5,
                    "Author": "Margaret Mitchell",
                    "Genre": "Historical Fiction"
                },
                {
                    "BooksName": "The Alchemist (Graphic Novel)",
                    "ISBN": "978-0061122415",
                    "Rating": 4.2,
                    "Author": "Paulo Coelho",
                    "Genre": "Philosophical Fiction"
                },
                {
                    "BooksName": "The Road (Graphic Novel)",
                    "ISBN": "978-0307265432",
                    "Rating": 4.1,
                    "Author": "Cormac McCarthy",
                    "Genre": "Post-Apocalyptic"
                },
                {
                    "BooksName": "Brave New World (Comic Series)",
                    "ISBN": "978-0060850524",
                    "Rating": 4.0,
                    "Author": "Aldous Huxley",
                    "Genre": "Dystopian"
                },
                {
                    "BooksName": "The Girl with the Dragon Tattoo (Graphic Novel)",
                    "ISBN": "978-0307269751",
                    "Rating": 4.4,
                    "Author": "Stieg Larsson",
                    "Genre": "Mystery"
                },
                {
                    "BooksName": "A Song of Ice and Fire (Graphic Novel Series)",
                    "ISBN": "978-0553103540",
                    "Rating": 4.7,
                    "Author": "George R.R. Martin",
                    "Genre": "Fantasy"
                },
                {
                    "BooksName": "The Fault in Our Stars (Graphic Novel)",
                    "ISBN": "978-0525478812",
                    "Rating": 4.5,
                    "Author": "John Green",
                    "Genre": "Young Adult"
                },
                {
                    "BooksName": "The Chronicles of Narnia (Graphic Novel Series)",
                    "ISBN": "978-0066238500",
                    "Rating": 4.6,
                    "Author": "C.S. Lewis",
                    "Genre": "Fantasy"
                },
                {
                    "BooksName": "The Name of the Wind (Comic Series)",
                    "ISBN": "978-0756404741",
                    "Rating": 4.8,
                    "Author": "Patrick Rothfuss",
                    "Genre": "Fantasy"
                },
                {
                    "BooksName": "Fahrenheit 451 (Graphic Novel)",
                    "ISBN": "978-1451673315",
                    "Rating": 4.2,
                    "Author": "Ray Bradbury",
                    "Genre": "Dystopian"
                }
            ]
            
        ];

        // Check if example data already exists in the Books collection
        const existingBooks = await Books.find({});
        if (existingBooks.length > 0) {
            console.log('Example data already exists. Skipping insertion.');
        } else {
            // Insert sample data into the Books collection
            await Books.insertMany(favBooks);
            console.log('Data Inserted Successfully');
        }
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = InitiateMongoServer;
