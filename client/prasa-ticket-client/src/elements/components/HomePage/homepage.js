import React from "react";
import PaymentForm from "../PaymentForm/paymentForm";
import PrasaTicket from "../PrasaTicket/prasaTicket";
import styles from "./homepage.module.css";

export const Homepage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.FeatureImageWrapper}>
                    <div className={styles.shade}>Prasa Ticketing System</div>
                </div>
            </div>
            <div styleName={styles.wrapper}>
                <h1 style={{ textAlign: "center" }}>
                    Welcome to Prasa Ticketing System - Your Ultimate Train
                    Travel Companion!
                </h1>

                <p style={{ textAlign: "center" }}>
                    Discover the joy of hassle-free train travel with us.
                    Whether you're planning a scenic journey or commuting for
                    work, we've got your tickets covered. Our user-friendly
                    platform makes booking a breeze, and with a wide range of
                    destinations and unbeatable deals, your next adventure is
                    just a click away.
                </p>
                <div className={styles.CardWrapper}>
                    <h2>Why choose us?</h2>
                    <p>Easy booking with our intuitive search tool</p>
                    <p>Exclusive promotions and discounts</p>
                    <p>Secure payment options for peace of mind</p>
                    <p>24/7 customer support to assist you at any time</p>
                    <p>Join our community of happy travelers</p>
                </div>

                <div className={styles.CardWrapper}>
                    <h2>
                        Start your journey with us today! Book your tickets now
                        and experience the convenience of train travel like
                        never before.
                    </h2>
                    <PaymentForm />
                </div>
            </div>
        </div>
    );
};

// export default Homepage;
