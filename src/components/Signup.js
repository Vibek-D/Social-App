import React from "react";
import * as yup from "yup";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Input from "../customs/FormikInput";
import Button from "../customs/CustomButton";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import MuiLink from "@mui/material/Link";
import { useDispatch } from "react-redux";
import { signup } from "../features/userSlice";
import Typography from "@mui/material/Typography";

const validationSchemaSignup = yup.object({
  email: yup
    .string("Enter your email")
    .required("Email is required")
    .email("Incorrect email format"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length"),
  confirmPassword: yup
    .string()
    .required("Password is required")
    .test("passwordsMatch", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
});

const Signup = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, { setSubmitting }) => {
    dispatch(
      signup({
        loggedIn: true,
        email: values.email,
        password: values.password,
      })
    );
    setSubmitting(false);
  };

  return (
    <Paper sx={{ mb: 3, maxWidth: 500 }}>
      <Box p={2}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchemaSignup}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
                <Field name="email" label="Email" component={Input} />
                <Field name="password" label="Password" component={Input} />
                <Field
                  name="confirmPassword"
                  label="Confirm Password"
                  component={Input}
                />
                <Box
                  mt={2}
                  textAlign="right"
                  display="flex"
                  justifyContent="space-between"
                  alignItems={"center"}
                >
                  <Typography variant="body1" color="initial">
                    Already logged in?
                    <MuiLink
                      component={Link}
                      to={"/"}
                      underline="none"
                      sx={{ ml: 0.5 }}
                    >
                      Log in
                    </MuiLink>
                  </Typography>
                  <Button
                    loading={isSubmitting}
                    variant="contained"
                    type="submit"
                  >
                    Sign In
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

export default Signup;
