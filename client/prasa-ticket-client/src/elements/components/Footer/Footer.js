import React from 'react'
import styles from "./footer.module.css"
const Footer = () => {
  return (
     <div className={styles.container}>
        <div className={styles.footerTextWrapper}>
           <span className={styles.copyRight}>Copyright &copy;</span>
           <span>Terms and conditions</span>
        </div>
    </div>
  )
}

export default Footer
