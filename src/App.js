import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
import { RestrictedRoute } from './Components/configRoute/restrictedRoute';
import { PrivateRoute } from "./Components/configRoute/privateRoute";
import "./App.css";

const Home = lazy(() => import('./pages/Home/Home'));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));

const App = () => {

  return (
    <Suspense fallback={<Loader />}>
       <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<RestrictedRoute redirectTo='/dashboard' component={<RegisterPage />} />} />
        <Route path="/login" element={<RestrictedRoute redirectTo='/dashboard' component={<LoginPage />} />} />
        <Route path="/dashboard" element={<PrivateRoute redirectTo='/login' component={<Dashboard />} />} />
      </Routes>
    </Suspense>
  );
};

export default App;
