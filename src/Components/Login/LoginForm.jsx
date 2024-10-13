import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/auth/authOperations";
import { NavLink } from "react-router-dom";
import eyeIcon from "../../images/eye.png";
import css from "./Login.module.css";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars minimum"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [errorText, setErrorText] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSignIn = async (values, { setSubmitting }) => {
    try {
      await dispatch(login(values));
      setSubmitting(false);
    } catch (error) {
      if (error.request) {
        setErrorText("Network error. Please check your internet connection.");
      }
      setSubmitting(false);
    }
  };

  return (
    <div className={css.loginPage}>
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
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={handleSignIn}
        >
          {({ isSubmitting }) => (
            <Form autoComplete="off">
              <div className={css.formDiv}>
                <div className={css.inputDiv}>
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
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className={css.input}
                  />
                  <span
                    className={css.togglePassword}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <img
                      src={eyeIcon}
                      alt="Toggle Password"
                      width={18}
                      height={18}
                    />
                  </span>
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
                  {isSubmitting
                    ? isLogin
                      ? "Logging in..."
                      : "Registering..."
                    : isLogin
                    ? "Log In Now"
                    : "Register Now"}
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

export default LoginForm;
