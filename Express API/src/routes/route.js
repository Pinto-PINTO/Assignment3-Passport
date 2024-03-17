
/*
-----------------------------------------
 File: src/routes/route.js
 Andara Pintuge Pinto - 200574919
 Lathindu Welhenage 200574922
 Date: 17th March 2024
-----------------------------------------
*/


const {
    addNewBook,
    getBooks,
    getBookWithID,
    deleteBook,
    updateBook
  } = require("../controllers/controller");
const { registerUser, loginUser } = require('../controllers/controller');
  
// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  console.log('Session:', req.session); // Log session information
  console.log('Authenticated:', req.isAuthenticated()); // Log authentication status
  
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).json({ message: 'Unauthorized' });
};

// Defining API routes
const routes = (app) => {
  // POST: Register a new user
  app.post('/register', registerUser);

  // POST: Login
  app.post('/login', loginUser);

  // Protected routes (require authentication)
  app.use(isAuthenticated);

  // POST: Add a new book
  app.post('/books', addNewBook);

  // GET: Get all books
  app.get('/books', getBooks);

  // GET: Get a book by ID
  app.get('/books/:bookId', getBookWithID);

  // PUT: Update a book by ID
  app.put('/books/:bookId', updateBook);

  // DELETE: Delete a book by ID
  app.delete('/books/:bookId', deleteBook);
};
  
  module.exports = routes;
  