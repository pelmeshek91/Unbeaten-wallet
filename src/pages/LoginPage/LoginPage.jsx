import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate, useLocation } from 'react-router-dom';
import { loginUserThunk } from 'redux/auth/authOperations';
// import { updateUserBalanceThunk } from '../../redux/transcactions/transcactionsOperations';
import { ToastContainer, toast } from 'react-toastify';
// import wallet from '../../img/decor-img/wallet.png';

import {
  Text,
  ErrorMessageContainer,
  Header,
  Container,
  Form,
  Label,
  Input,
  Button,
  ErrorMessage,
  ButtonContainer,
  GlobalStyle,
  ButtonWhite,
  ImgWallet,
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
      .then(() => navigate('/expenses'))
      .catch(error => {
        toast.error("Email doesn't exist or password is wrong"); // Display the error message using toast.error
      });
  };

  return (
    <div>
      <ToastContainer />
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
                  type="email"
                  name="email"
                  id="email"
                  placeholder="youremail@mail.com"
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
                  type="password"
                  name="password"
                  id="password"
                  placeholder="* * * * * * * *"
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
                <Button type="submit">Login</Button>

                <ButtonWhite
                  type="button"
                  onClick={() => handleRegistration(values)}
                >
                  Registration
                </ButtonWhite>
              </ButtonContainer>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default LoginPage;
