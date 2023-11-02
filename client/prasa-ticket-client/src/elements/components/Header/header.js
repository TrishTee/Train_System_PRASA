import React from 'react'
import styles from "./header.module.css"
import { Link } from 'react-router-dom';
import logo from '../../../images/logo192.png'
const header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Header}>
        <div className={styles.Logo}>
          <img src={logo} width={50} height={50} alt=""/>
          <span className={styles.logoText}>Prasa Ticketing System</span>
        </div>
        <div className={styles.headerLinks}>
          <Link to="/" className={styles.Link}>
            <h3 className={styles.link} href="./">
              Home
            </h3>
          </Link>
          <Link to="/Login" className={styles.Link}>
            <h3 className={styles.link} href="./login">
              Login
            </h3>
          </Link>
          <Link to="/ContactUs" className={styles.Link}>
            <h3 className={styles.link} href="./contactUs">
              Trips
            </h3>
          </Link>
          <Link to="/Trips" className={styles.Link}>
            <h3 className={styles.link} href="./Stations">
              Stations
            </h3>
          </Link>
        </div>
      </div>
      {/* <div className={styles.movingTextWrapper}>
        <marquee className={styles.movingText}>
          Welcome to PRASA where traveling is made easier and affordable. Please
          be on the lookout for any upcoming updates regarding all train
          schedules. Welcome to PRASA where traveling is made easier and
          affordable. Please be on the lookout for any upcoming updates
          regarding all train schedules. Welcome to PRASA where traveling is
          made easier and affordable. Please be on the lookout for any upcoming
          updates regarding all train schedules.
        </marquee>
      </div> */}
    </div>
  );
}

export default header
