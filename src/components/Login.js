import React from "react";
import * as yup from "yup";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Input from "../customs/FormikInput";
import Button from "../customs/CustomButton";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const validationSchemaLogin = yup.object({
  email: yup
    .string("Enter your email")
    .required("Email is required")
    .email("Incorrect email format"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length"),
});

const Login = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Paper sx={{ mb: 3, maxWidth: 500 }}>
      <Box p={2}>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={validationSchemaLogin}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
                <Field name="email" label="Email" component={Input} />
                <Field name="password" label="Password" component={Input} />
                <Box
                  mt={2}
                  textAlign="right"
                  display="flex"
                  justifyContent="space-between"
                  alignItems={"center"}
                >
                  <Typography variant="body1" color="initial">
                    New to the app?
                    <MuiLink
                      component={Link}
                      to={"/signup"}
                      underline="none"
                      sx={{ ml: 0.5 }}
                    >
                      Sign Up
                    </MuiLink>
                  </Typography>
                  <Button
                    loading={isSubmitting}
                    variant="contained"
                    type="submit"
                  >
                    Login
                  </Button>
                </Box>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Paper>
  );
};

export default Login;
