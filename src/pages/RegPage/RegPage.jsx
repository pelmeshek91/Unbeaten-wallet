import { useDispatch } from 'react-redux';

import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate, useLocation } from 'react-router-dom';
import { registerUserThunk } from 'redux/auth/authOperations';
import {
  Text,
  ErrorMessageContainer,
  Header,
  ImgWallet,
  Container,
  Form,
  Label,
  Input,
  Button,
  ErrorMessage,
  ButtonWhite,
  ButtonContainer,
  GlobalStyle,
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
        toast.success('Account succesfully created, you can login now', {
          position: 'top-right',

          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
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
    <div>
      <Header />
      <GlobalStyle />
      <Container>
        <ImgWallet></ImgWallet>
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
                <Text>Email:</Text>
                <Input
                  placeholder="youremail@mail.com"
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <ErrorMessageContainer hasError={touched.email && errors.email}>
                  {touched.email && errors.email && (
                    <ErrorMessage>{errors.email}</ErrorMessage>
                  )}
                </ErrorMessageContainer>
              </Label>

              <Label htmlFor="password">
                <Text>Password:</Text>
                <Input
                  placeholder="* * * * * * * *"
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <ErrorMessageContainer
                  hasError={touched.password && errors.password}
                >
                  {touched.password && errors.password && (
                    <ErrorMessage>{errors.password}</ErrorMessage>
                  )}
                </ErrorMessageContainer>
              </Label>
              <ButtonContainer>
                <ButtonWhite type="button" onClick={handleLogin}>
                  Login
                </ButtonWhite>
                <Button type="submit">Register</Button>
              </ButtonContainer>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default RegPage;
