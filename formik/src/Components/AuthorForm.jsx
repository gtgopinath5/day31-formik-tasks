// src/components/AuthorForm.jsx

import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ addAuthor, updateAuthor, currentAuthor, setCurrentAuthor }) => {
  useEffect(() => {
    if (currentAuthor) {
      formik.setValues(currentAuthor);
    }
  }, [currentAuthor]);

  const formik = useFormik({
    initialValues: {
      id: '',
      name: '',
      birthDate: '',
      biography: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      birthDate: Yup.date().required('Required'),
      biography: Yup.string().required('Required')
    }),
    onSubmit: (values, { resetForm }) => {
      if (values.id) {
        updateAuthor(values);
      } else {
        values.id = Date.now().toString();
        addAuthor(values);
      }
      resetForm();
      setCurrentAuthor(null);
    }
  });

  return (
    <div>
      <h2>{currentAuthor ? 'Edit Author' : 'Add Author'}</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="birthDate">Birth Date</label>
          <input
            id="birthDate"
            name="birthDate"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.birthDate}
          />
          {formik.touched.birthDate && formik.errors.birthDate ? (
            <div>{formik.errors.birthDate}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="biography">Biography</label>
          <textarea
            id="biography"
            name="biography"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.biography}
          />
          {formik.touched.biography && formik.errors.biography ? (
            <div>{formik.errors.biography}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AuthorForm;
