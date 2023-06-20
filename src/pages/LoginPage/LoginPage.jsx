import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { loginUserThunk, registerUserThunk } from 'redux/auth/authOperations';

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
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [isLogin, setIsLogin] = useState(true);

  const handleBtnClick = () => {
    setIsLogin(prevIsLogin => !prevIsLogin);
  };

  const handleSubmit = async values => {
    if (isLogin) {
      await dispatch(
        loginUserThunk({
          email: values.email,
          password: values.password,
        })
      );
    } else {
      await dispatch(
        registerUserThunk({
          email: values.email,
          password: values.password,
        })
      );
    }

    navigate('/transactions-income');
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/transactions-income');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Registration'}</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
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
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.email && errors.email && <div>{errors.email}</div>}
            </label>

            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password && (
                <div>{errors.password}</div>
              )}
            </label>

            <button type="submit" disabled={isAuthenticated}>
              {isLogin ? 'Login' : 'Register'}
            </button>
            <button type="button" onClick={handleBtnClick}>
              {isLogin ? 'Register' : 'Login'}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
