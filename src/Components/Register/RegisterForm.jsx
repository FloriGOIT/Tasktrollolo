import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../Redux/auth/authOperations";
import { NavLink } from "react-router-dom";
import css from "./Register.module.css";
import useMediaQuery from "../../hooks/useMediaQuerry";

const registrationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars minimum"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [errorText, setErrorText] = useState("");
  const { isTabletOrMobile } = useMediaQuery();

  const handleSignUp = async (values, { setSubmitting }) => {
    try {
      await dispatch(register(values));
      setSubmitting(false);
    } catch (error) {
      if (error.request) {
        setErrorText("Network error. Please check your internet connection.");
      }
      setSubmitting(false);
    }
  };

  return (
    <div className={css.registrationPage}>
      <div className={css.formContainer}>
        <div className={css.navigationContainer}>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? `${css.navLink} ${css.activeLink}` : css.navLink
            }
          >
            Registration
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? `${css.navLink} ${css.activeLink}` : css.navLink
            }
          >
            Log In
          </NavLink>
        </div>

        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={registrationSchema}
          onSubmit={handleSignUp}
        >
          {({ isSubmitting }) => (
            <Form autoComplete="off">
              <div className={css.formDiv}>
                <div>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className={css.input}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={css.error}
                  />
                </div>
                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className={css.input}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={css.error}
                  />
                </div>
                <div className={css.passwordContainer}>
                  <Field
                    name="password"
                    type={"password"}
                    placeholder="Create a password"
                    className={css.input}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className={css.error}
                  />
                </div>
                <button
                  className={css.button}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Registering..." : "Register Now"}
                </button>
                <div className={css.error}>{errorText}</div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
