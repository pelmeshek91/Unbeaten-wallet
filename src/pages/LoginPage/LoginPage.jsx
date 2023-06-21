import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate, useLocation } from 'react-router-dom';
import { loginUserThunk, registerUserThunk } from 'redux/auth/authOperations';
import { updateUserBalanceThunk } from '../../redux/transcactions/transcactionsOperations';
import { toast } from 'react-toastify';

import {
  Container,
  Form,
  Label,
  Input,
  Button,
  ErrorMessage,
} from './LoginPage.styled';

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

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const { email, password } = location.state || {};

  const handleRegistration = values => {
    navigate('/register', {
      state: { email: values.email, password: values.password },
    });
  };

  const handleSubmit = values => {
    dispatch(loginUserThunk({ email: values.email, password: values.password }))
      .unwrap()
      .then(() => navigate('/transactions-income'))
      .catch(error => {
        toast.error("Email doesn't exist or password is wrong"); // Display the error message using toast.error
      });
  };

  return (
    <Container>
      <h2>Authorization</h2>
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
                type="email"
                name="email"
                id="email"
                placeholder="youremail@mail.com"
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
                type="password"
                name="password"
                id="password"
                placeholder="* * * * * * * *"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password && (
                <ErrorMessage>{errors.password}</ErrorMessage>
              )}
            </Label>

            <Button type="submit">Login</Button>

            <Button type="button" onClick={() => handleRegistration(values)}>
              Registration
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginPage;
