"use client";
import React from "react";
import { useState } from "react";
import styles from "./login.module.css";
import logo from './../../../images/logo192.png'
import Link from "react-router-dom"
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.formHeader}>
          <img src={logo} width={50} height={50} />
          <span className={styles.HeaderText}>Prasa Login</span>
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={styles.loginfield}
            type="text"
            name="username"
            id="username"
            placeholder="email/username"
            autoFocus={true}
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className={styles.loginfield}
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.checkbox_Rem_Wrapper}>
          <div className={styles.remember}>
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            <label for="rememberMe">Remember Me</label>
          </div>
          <span>
            <a href="#">Forgot Password?</a>
          </span>
           </div>
           <input className={styles.logInBtn}type="button" value="signIn"/>
        </div>
        <div className={styles.signUp}>
         Dont have an account? <a href="./signUp">signUp!</a>
        </div>
    </div>
  );
};
