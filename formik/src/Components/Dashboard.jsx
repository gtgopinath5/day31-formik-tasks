// src/components/Dashboard.js

import React from 'react';
import BookForm from './BookForm';
import AuthorForm from './AuthorForm';
import BookList from './BookList';
import AuthorList from './AuthorList';

const Dashboard = ({
  books,
  authors,
  addBook,
  updateBook,
  deleteBook,
  addAuthor,
  updateAuthor,
  deleteAuthor,
  currentBook,
  setCurrentBook,
  currentAuthor,
  setCurrentAuthor
}) => {
  return (
    <div>
      <h1>Library Management Dashboard</h1>
      <div className="forms">
        <BookForm
          addBook={addBook}
          updateBook={updateBook}
          currentBook={currentBook}
          setCurrentBook={setCurrentBook}
        />
        <AuthorForm
          addAuthor={addAuthor}
          updateAuthor={updateAuthor}
          currentAuthor={currentAuthor}
          setCurrentAuthor={setCurrentAuthor}
        />
      </div>
      <div className="lists">
        <BookList
          books={books}
          deleteBook={deleteBook}
          setCurrentBook={setCurrentBook}
        />
        <AuthorList
          authors={authors}
          deleteAuthor={deleteAuthor}
          setCurrentAuthor={setCurrentAuthor}
        />
      </div>
    </div>
  );
};

export default Dashboard;
