import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TbLogout } from "react-icons/tb";
import { logout } from "../../../Redux/auth/authOperations"; 
import css from "./Sidebar.module.css";

export const LogingOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logout());
    navigate("/login"); 
  };

  return (
    <div className={css.logOutF} onClick={handleLogOut}>
      <button> 
        <TbLogout />
      </button>
      <p>Log Out</p>
    </div>
  );
};
