// src/App.js

import React, { useState } from 'react';
import Dashboard from './Components/Dashboard';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);
  const [currentAuthor, setCurrentAuthor] = useState(null);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const updateBook = (updatedBook) => {
    setBooks(books.map(book => (book.id === updatedBook.id ? updatedBook : book)));
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const addAuthor = (author) => {
    setAuthors([...authors, author]);
  };

  const updateAuthor = (updatedAuthor) => {
    setAuthors(authors.map(author => (author.id === updatedAuthor.id ? updatedAuthor : author)));
  };

  const deleteAuthor = (id) => {
    setAuthors(authors.filter(author => author.id !== id));
  };

  return (
    <div className="App">
      <Dashboard
        books={books}
        authors={authors}
        addBook={addBook}
        updateBook={updateBook}
        deleteBook={deleteBook}
        addAuthor={addAuthor}
        updateAuthor={updateAuthor}
        deleteAuthor={deleteAuthor}
        currentBook={currentBook}
        setCurrentBook={setCurrentBook}
        currentAuthor={currentAuthor}
        setCurrentAuthor={setCurrentAuthor}
      />
    </div>
  );
}

export default App;

