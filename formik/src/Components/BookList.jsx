// src/components/BookList.js

import React from 'react';

const BookList = ({ books, deleteBook, setCurrentBook }) => {
  return (
    <div>
      <h2>Book List</h2>
      {books.map(book => (
        <div key={book.id} className="card">
          <h3>{book.title}</h3>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>ISBN:</strong> {book.isbn}</p>
          <p><strong>Publication Date:</strong> {book.publicationDate}</p>
          <button onClick={() => setCurrentBook(book)}>Edit</button>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;

