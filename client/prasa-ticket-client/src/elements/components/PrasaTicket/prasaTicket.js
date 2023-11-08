import React from 'react'
import styles from "./prasaTicket.module.css"
const prasaTicket = () => {
  return (
    <div className={styles.container}>
      <div className={styles.receitHeader}>
        <div className={styles.logo}>
          {/* prasa logo should be here */}
          Logo
        </div>
        <span className={styles.title}>PRASA Receit</span>
        </div>
        <div className={styles.ticketScan}>
        {/* bar code should be here */}
        </div>
      <div className={styles.receitDetails}>
        <span>Ticket ID: {"Station"}</span>
        <span>Departure: {"Station Name"}</span>
        <span>Destination: {"Station Name"}</span>
           <span>Departure Date: {"24 Oct 2023"} at {"09:00"}</span>
           <span>Purchase Date : { "23 Oct 2023"}</span>
        </div>
        <div className={styles.receitDisclaimer}></div>
    </div>
  );
}

export default prasaTicket
