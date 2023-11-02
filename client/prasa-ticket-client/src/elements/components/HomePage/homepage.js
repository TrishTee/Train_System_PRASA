import React from "react";
import PaymentForm from "../PaymentForm/paymentForm";
import PrasaTicket from "../PrasaTicket/prasaTicket";
import styles from "./homepage.module.css";
import featuredImage from '../../../images/HomeFeatured.jpg'
import Footer from "../Footer/Footer";
import Checkout from "../CheckOut/checkOut";
const homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.FeatureImageWrapper}>
          <div className={styles.shade}>
            Prasa Ticketing System
          </div>
        </div>
      </div>
    </div>
  );
};

export default homepage;
