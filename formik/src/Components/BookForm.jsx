// src/components/BookForm.jsx

import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ addBook, updateBook, currentBook, setCurrentBook }) => {
  useEffect(() => {
    if (currentBook) {
      formik.setValues(currentBook);
    }
  }, [currentBook]);

  const formik = useFormik({
    initialValues: {
      id: '',
      title: '',
      author: '',
      isbn: '',
      publicationDate: ''
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      author: Yup.string().required('Required'),
      isbn: Yup.string().required('Required'),
      publicationDate: Yup.date().required('Required')
    }),
    onSubmit: (values, { resetForm }) => {
      if (values.id) {
        updateBook(values);
      } else {
        values.id = Date.now().toString();
        addBook(values);
      }
      resetForm();
      setCurrentBook(null);
    }
  });

  return (
    <div>
      <h2>{currentBook ? 'Edit Book' : 'Add Book'}</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div>{formik.errors.title}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            id="author"
            name="author"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.author}
          />
          {formik.touched.author && formik.errors.author ? (
            <div>{formik.errors.author}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="isbn">ISBN</label>
          <input
            id="isbn"
            name="isbn"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.isbn}
          />
          {formik.touched.isbn && formik.errors.isbn ? (
            <div>{formik.errors.isbn}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="publicationDate">Publication Date</label>
          <input
            id="publicationDate"
            name="publicationDate"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.publicationDate}
          />
          {formik.touched.publicationDate && formik.errors.publicationDate ? (
            <div>{formik.errors.publicationDate}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookForm;
