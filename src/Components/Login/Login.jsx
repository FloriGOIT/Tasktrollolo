import React from 'react';
import { useDispatch } from 'react-redux';  
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/authSlice';
import styles from './Login.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      const { email, password } = values;
      try {
        
        const { token, user } = await dispatch(loginUser({ email, password })).unwrap();

        localStorage.setItem('token', token);
        
        console.log('Login successful:', { token, user });

   
        navigate('/HealthEN-Project');
      } catch (error) {
        console.error('Login failed:', error.message);
        alert('Login failed. Please check your credentials and try again.');
      }
    },
  });

  return (
    <div className={styles.appContainer}>
      <span className={styles.titleLogin}><h2>LOG IN</h2></span>
      
      <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
    
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>
            <input
              id="email"
              type="email"
              placeholder="Email"
              {...formik.getFieldProps('email')}
              className={styles.formInput}
            />
          </label>
          {formik.touched.email && formik.errors.email ? (
            <p className={styles.error}>{formik.errors.email}</p>
          ) : null}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.formLabel}>
            <input
              id="password"
              type="password"
              placeholder="Password"
              {...formik.getFieldProps('password')}
              className={styles.formInput}
            />
          </label>
          {formik.touched.password && formik.errors.password ? (
            <p className={styles.error}>{formik.errors.password}</p>
          ) : null}
        </div>

     
        <div className={styles.formGroup}>
          <button type="submit" className={styles.loginButton}>Log in</button>
        </div>

   
        <div>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
