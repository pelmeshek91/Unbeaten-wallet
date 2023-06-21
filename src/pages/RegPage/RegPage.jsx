import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate, useLocation } from 'react-router-dom';
import { registerUserThunk } from 'redux/auth/authOperations';
import {
  Container,
  Form,
  Label,
  Input,
  Button,
  ErrorMessage,
} from '../LoginPage/LoginPage.styled';
import { toast } from 'react-toastify';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('E-mail must be valid')
    .required('E-mail is a required field'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is a required field'),
});

const RegPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const errorMessage = useSelector(state => state.auth.error);

  const location = useLocation();
  const { email, password } = location.state || {};

  const handleSubmit = values => {
    dispatch(
      registerUserThunk({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        navigate('/login');
      })
      .catch(error => {
        toast.error('Email already exists'); // Display the error message using toast.error
      });
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <Container>
      <h2>Registration</h2>
      <Formik
        initialValues={{ email: email || '', password: password || '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="email">
              Email:
              <Input
                placeholder="youremail@mail.com"
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.email && errors.email && (
                <ErrorMessage>{errors.email}</ErrorMessage>
              )}
            </Label>

            <Label htmlFor="password">
              Password:
              <Input
                placeholder="* * * * * * * *"
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password && (
                <ErrorMessage>{errors.password}</ErrorMessage>
              )}
            </Label>

            <Button type="button" onClick={handleLogin}>
              Login
            </Button>
            <Button type="submit">Register</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default RegPage;
