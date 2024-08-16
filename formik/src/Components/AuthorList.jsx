// src/components/AuthorList.js

import React from 'react';

const AuthorList = ({ authors, deleteAuthor, setCurrentAuthor }) => {
  return (
    <div>
      <h2>Author List</h2>
      {authors.map(author => (
        <div key={author.id} className="card">
          <h3>{author.name}</h3>
          <p><strong>Birth Date:</strong> {author.birthDate}</p>
          <p><strong>Biography:</strong> {author.biography}</p>
          <button onClick={() => setCurrentAuthor(author)}>Edit</button>
          <button onClick={() => deleteAuthor(author.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AuthorList;

