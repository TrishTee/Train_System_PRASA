import React, { useEffect, useState } from "react";
import styles from "./paymentForm.module.css";
// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from "axios";

const PaymentForm = () => {
  const [trip, setTrip] = useState("");
  const [passenger, setPassenger] = useState("");
  const [tripData, setTripData] = useState({});
  const [bankData, setBankData] = useState({});
  const [trips, setTrips] = useState([]);
  const [stations, setStations] = useState([]);
  const [formState, setFormState] = useState("tripInfo");

  const handleTripSubmit = async (e) => {
    e.preventDefault();
    setFormState('bankInfo');
    // try {
    // } catch (error) {
    //   console.error("Error processing payment:", error);
    // }
  };

  const handleBankSubmit = async (e) => {
    e.preventDefault();
    setFormState('ticketInfo');
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

      returnMatchedStations(tripData?.departStation)
    },
    [tripData]
  );

  const returnMatchedStations = (stationId) => {
    for (const station of stations) {
      if (station?._id === stationId) {
        console.log("Station yacho iyi:", station)
        return station
      }
    }
  }

  const tripInfoForm = () => {
    return (
      <div className={styles.container}>
        <form className={styles.paymentForm} onSubmit={handleTripSubmit}>
          <h2
            className={`${styles.formSubtitle} ${styles.formWrapperTitles}`}
            style={{ fontFamily: 'Poppins' }}
          >
            Provide departure and destination details
          </h2>
          <div className={`${styles.toWrapper} ${styles.routesWrapper}`}>
            <h3 className={styles.fromIcon}>Departure</h3>
            <select
              className={`${styles.fromTripsSelect} ${styles.select}`}
              value={tripData?.departStation}
              onChange={(e) =>
                setTripData({ ...tripData, departStation: e.target.value })
              }
            >
              <option className="option" key="00" value={null}>
                -- Choose Departure Station --
              </option>
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
            <h3 className="fromIcon">Destination</h3>
            <select
              className={`${styles.toTripsSelect} ${styles.select}`}
              value={tripData?.arriveStation}
              onChange={(e) =>
                setTripData({ ...tripData, arriveStation: e.target.value })
              }
            >
              <option className="option" key="00" value={null}>
                -- Choose Final Destination --
              </option>
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
                value={tripData?.date}
                name="date"
                id="date"
                placeholder="01/20/2023"
                required
                onChange={(e) =>
                  setTripData({ ...tripData, date: e.target.value })
                }
              />
            </div>
            <div className={styles.dateTimeWrapper}>
              <span>Time</span>
              <input
                className={styles.dayTime}
                type="time"
                value={tripData?.time}
                name="time"
                id="time"
                required
                onChange={(e) =>
                  setTripData({ ...tripData, time: e.target.value })
                }
              />
            </div>
          </div>
          <div className={styles.ButtonsWrapper}>
            <button
              className={`${styles.buyBtn} ${styles.payBtns}`}
              type="submit"
            >
              Pay for Ticket
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

  const bankInfoForm = () => {
    return (
      <div className={styles.container}>
        <form className={styles.paymentForm} onSubmit={handleBankSubmit}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <i class="ri-arrow-left-line" style={{ fontSize: '24px', color: '#06708a' }}
              onClick={e => setFormState('tripInfo')}
            ></i>
            <h2
              className={`${styles.formSubtitle} ${styles.formWrapperTitles}`}
              style={{ fontFamily: 'Poppins' }}
            >
              Enter your bank details.
            </h2>
          </div>

          <hr />

          <h3 className="sectionHeader">Your Trip Summary</h3>

          <div style={{ display: 'flex', flexDirection: "column", gap: '5px' }}>
            <div className={`${styles.toWrapper} ${styles.routesWrapper}`} style={{ display: 'flex', flexDirection: "row", gap: '10px' }}>
              <>Route: From </>
              <><b>{returnMatchedStations(tripData?.departStation)?.name}</b></>  to
              <><b>{returnMatchedStations(tripData?.arriveStation)?.name}</b></>
            </div>

            <div className={`${styles.toWrapper} ${styles.routesWrapper}`} style={{ display: 'flex', flexDirection: "row", gap: '10px' }}>
              <>Date: </>
              <><b>{tripData?.date}</b></>
            </div>

            <div className={`${styles.toWrapper} ${styles.routesWrapper}`} style={{ display: 'flex', flexDirection: "row", gap: '10px' }}>
              <>Time: </>
              <><b>{tripData?.time}</b></>
            </div>
          </div>

          <hr />

          <h3 className="sectionHeader">Bank Details</h3>
          <div style={{ display: 'flex', flexDirection: "column", gap: '10px', background: 'white', padding: '20px', borderRadius: '10px' }}>
            <div className="inputSection" style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'space-between' }}>
              Email: <input type="email" className="input" placeholder="Optional"
                onChange={(e) =>
                  setTripData({ ...bankData, user: e.target.value })
                }
                required
              />
            </div>
            <div className="inputSection" style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'space-between' }}>
              Card Number: <input type="number" className="input" placeholder="e.g 4012888888881881"
                onChange={(e) =>
                  setTripData({ ...bankData, cardNumber: e.target.value })
                }
                required
              />
            </div>
            <div className="inputSection" style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'space-between' }}>
              Expiry Date: <input type="text" className="input" placeholder="e.g 06/25"
                onChange={(e) =>
                  setTripData({ ...bankData, cardExpiryDate: e.target.value })
                }
                required
              />
            </div>
            <div className="inputSection" style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'space-between' }}>
              CVC: <input type="number" className="input" placeholder="e.g 577"
                onChange={(e) =>
                  setTripData({ ...bankData, cardCVC: e.target.value })
                }
                required
              />
            </div>
          </div>

          <p className="sectionHeader">By selecting Buy Ticket you agree to our Terms and Conditions</p>

          <button
            className={`${styles.buyBtn} ${styles.payBtns}`}
            type="submit"
          >
            Buy Ticket
          </button>

        </form>
      </div>
    )
  };


  const ticketInfo = () => {
    return (
      <div className={styles.container}>
        <form className={styles.paymentForm} onSubmit={handleBankSubmit}>
        </form>
        <h2
          className={`${styles.formSubtitle} ${styles.formWrapperTitles}`}
          style={{ fontFamily: 'Poppins' }}
        >
          PRASA Receipt
        </h2>

        <hr />

        <div style={{ display: 'flex', flexDirection: "column", gap: '10px' }}>
          Ticket ID: 12345
          <div style={{ display: 'flex', flexDirection: "column", gap: '5px' }}>
            <div className={`${styles.toWrapper} ${styles.routesWrapper}`} style={{ display: 'flex', flexDirection: "row", gap: '10px' }}>
              <>Route: From </>
              <><b>{returnMatchedStations(tripData?.departStation)?.name}</b></>  to
              <><b>{returnMatchedStations(tripData?.arriveStation)?.name}</b></>
            </div>

            <div className={`${styles.toWrapper} ${styles.routesWrapper}`} style={{ display: 'flex', flexDirection: "row", gap: '10px' }}>
              <>Date: </>
              <><b>{tripData?.date}</b></>
            </div>

            <div className={`${styles.toWrapper} ${styles.routesWrapper}`} style={{ display: 'flex', flexDirection: "row", gap: '10px' }}>
              <>Time: </>
              <><b>{tripData?.time}</b></>
            </div>
          </div>
          Ticket Bought: {Date.now("h:m")}
        </div>

        <hr />

        <div className={styles.ButtonsWrapper}>
          <button
            className={`${styles.buyBtn} ${styles.payBtns}`}
            type="submit"
          >
            Save Ticket
          </button>
          <button
            className={`${styles.cartBtn} ${styles.payBtns}`}
            type="button"
            onClick={e => { setFormState('tripInfo'); setTripData({}) }}
          >
            Buy More
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="payment-form">
      <h2>Where To?</h2>
      {
        formState === "tripInfo" ? tripInfoForm()
          : formState === "bankInfo" ? bankInfoForm()
            : formState === "ticketInfo" && ticketInfo()
      }
    </div>
  );
};

export default PaymentForm;
