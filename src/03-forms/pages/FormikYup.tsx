import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css'


export const FormikYup = () => {

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Debe de tener 15 o menos carácteres')
        .required('Obligatorio'),
      lastName: Yup.string()
        .max(15, 'Debe de tener 15 o menos carácteres')
        .required('Obligatorio'),
      email: Yup.string()
        .email('No es un email válido')
        .required('Obligatorio'),
    })
  });



  return (
    <div>
      <h1>Formik Yup Tutorial</h1>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          {...getFieldProps('firstName')}
        />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          {...getFieldProps('lastName')}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          {...getFieldProps('email')}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}


        <button type="submit">Submit</button>

      </form>

    </div>
  )
}