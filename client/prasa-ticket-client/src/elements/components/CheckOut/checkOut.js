"use client";
import React, { useState } from "react";
import styles from "./checkout.module.css";

function Checkout() {
  const [cardNumber, setCardNumber] = useState("");
  const [ExpiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  return (
    <div className={styles.checkoutCard}>
      <h2 className={styles.Title}>Checkout</h2>
      <hr />
      <div className={styles.checkoutInfo}>
        <p className={styles.fromTo}>
          From{" "}
          <span className={styles.stationNames}>
            <b>{"Station A"}</b>
          </span>{" "}
          to{" "}
          <span className={styles.stationNames}>
            <b>{"Station B"}</b>
          </span>
        </p>
        <p className={styles.dateTime}>{"01/11/2023 16:18 PM"}</p>
        <div>
          <span className={styles.ticketPrice}>R 100.00</span>
          &nbsp;&nbsp;&nbsp;
          <span className={styles.numberOfTickets}>1 ticket</span>
        </div>
      </div>
      <hr />
      <p className={styles.user}>User: {"Anonymous/Username"}</p>
      <hr />
      <div className={styles.cardDetails}>
        <div className={styles.cardDetailsForm}>
          <input
            className={styles.cardInput}
            type="number"
            placeholder="Card Number"
            required
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <input
            className={styles.cardInput}
            type="date"
            placeholder="Expiry Date"
            required
            value={ExpiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
          <input
            className={styles.cardInput}
            type="number"
            placeholder="cvv"
            required
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
      </div>

      <p className={styles.termsConditions}>
        By selecting <b>Buy Ticket(s)</b> you agree to out{" "}
        <b>
          <a>Terms and Conditions</a>
        </b>
      </p>
      <button className={styles.buyTicketBtn}>Buy Ticket(s)</button>
    </div>
  );
}

export default Checkout;
