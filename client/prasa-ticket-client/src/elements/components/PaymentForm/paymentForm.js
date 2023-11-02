import React, { useEffect, useState } from "react";
import styles from "./paymentForm.module.css";
// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from "axios";

const PaymentForm = () => {
  const [trip, setTrip] = useState("");
  const [passenger, setPassenger] = useState("");
  const [tripData, setTripData] = useState({});
  const [trips, setTrips] = useState([]);
  const [stations, setStations] = useState([]);
  const [formState, setFormState] = useState("ticketInfo");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  useEffect(() => {
    console.log(tripData);
    console.log(stations);
  }, [trip, passenger, tripData, formState]);

  //
  useEffect(
    (req, res, next) => {
      axios.get("http://localhost:5100/api/getStations").then((res) => {
        setStations(res.data);
      });
      axios.get("http://localhost:5100/api/getTrips").then((res) => {
        setTrips(res.data);
      });
    },
    [tripData]
  );

  const ticketInfo = () => {
    return (
      <div className={styles.container}>
        <form className={styles.paymentForm} onSubmit={handleSubmit}>
          <div className={styles.formWrapper}>
            <h2 className={`${styles.formTitle} ${styles.formWrapperTitles}`}>
              Where To?
            </h2>
            <span
              className={`${styles.formSubtitle} ${styles.formWrapperTitles}`}
            >
              Provide departure and destination details
            </span>
          </div>
          <div className={`${styles.toWrapper} ${styles.routesWrapper}`}>
            <div className={styles.fromIcon}>Departure</div>
            <select
              className={`${styles.fromTripsSelect} ${styles.select}`}
              onChange={(e) =>
                setTripData({ ...tripData, departStation: e.target.value })
              }
            >
              {stations?.map((station, i) => {
                // let fromStation ={tripData?.departStation===station?._id && select}
                return (
                  <option className="option" key={i} value={station?._id}>
                    {station?.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className={`${styles.fromWrapper} ${styles.routesWrapper}`}>
            <div className="fromIcon">Destination</div>
            <select
              className={`${styles.toTripsSelect} ${styles.select}`}
              onChange={(e) =>
                setTripData({ ...tripData, arriveStation: e.target.value })
              }
            >
              {stations?.map((station, i) => {
                // let fromStation ={tripData?.departStation===station?._id && select}
                return (
                  <option className="option" key={i} value={station?._id}>
                    {station?.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={styles.dateTimeContainer}>
            <div className={styles.dateTimeWrapper}>
              <span>Date</span>
              <input
                className={styles.dayTime}
                type="date"
                name="date"
                id="date"
                placeholder="01/20/2023"
                required
              />
            </div>
            <div className={styles.dateTimeWrapper}>
              <span>Time</span>
              <input
                className={styles.dayTime}
                type="time"
                name="time"
                id="time"
                required
              />
            </div>
          </div>
          <div className={styles.ButtonsWrapper}>
            <button
              className={`${styles.buyBtn} ${styles.payBtns}`}
              type="submit"
            >
              Buy Ticket
            </button>
            <button
              className={`${styles.cartBtn} ${styles.payBtns}`}
              type="button"
            >
              Add to Cart
            </button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="payment-form">
      <h2>Where To?</h2>
      {formState === "ticketInfo" ? ticketInfo() : ""}
    </div>
  );
};

export default PaymentForm;
