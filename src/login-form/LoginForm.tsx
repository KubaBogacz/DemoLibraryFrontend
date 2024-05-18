import { Button, TextField, Box } from '@mui/material';
import './LoginForm.css';
import { Formik } from 'formik';
import { useCallback, useMemo } from 'react';
import * as yup from 'yup';

function LoginForm() {
  const onSubmit = useCallback(
    (values: { username: string; password: string }) => {
      console.log(values);
    },
    [],
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
              helperText={
                formik.touched.username && Boolean(formik.errors.username)
              }
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={
                formik.touched.password && Boolean(formik.errors.password)
              }
            />
            <Button
              variant="contained"
              type="submit"
              disabled={
                !formik.isValid ||
                !formik.touched.password ||
                !formik.touched.username
              }
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
