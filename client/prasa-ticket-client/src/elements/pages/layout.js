import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/Footer"
import styles from "./layout.module.css"
const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
