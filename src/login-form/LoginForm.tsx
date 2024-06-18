import { Button, TextField, Box } from '@mui/material';
import './LoginForm.css';
import { useCallback, useMemo } from 'react';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../api/ApiProvider';
import { Formik } from 'formik';

function LoginForm() {
  const navigate = useNavigate();
  const apiClient = useApi();

  const onSubmit = useCallback(
    (values: { username: string; password: string }, formik: any) => {
      apiClient?.login(values).then((response) => {
        if (response.success) {
          // localStorage to implement token
          localStorage.setItem('token', response.data?.token || '');
          navigate('/home');
        } else {
          formik.setFieldError('username', ' ');
          formik.setFieldError('password', 'Invalid username or password');
        }
      });
    },
    [apiClient, navigate],
  );

  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required(),
      }),
    [],
  );

  return (
    <Box className="login-box">
      <div className="login-logo">
        <h1>Log in</h1>
      </div>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnChange
        validateOnBlur
      >
        {(formik: any) => (
          <form
            className="login-form"
            id="singForm"
            onSubmit={formik.handleSubmit}
            noValidate
          >
            <TextField
              id="username"
              label="Username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button
              variant="contained"
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Log in
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default LoginForm;
