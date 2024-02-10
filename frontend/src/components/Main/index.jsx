import React from 'react';
import styles from './style.module.css'; // Import CSS module
import img from '../../image/food.jpeg';

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  
  return (
    <div className={styles.vic}> {/* Use styles.vic for applying CSS class */}
      <h2>Successful</h2>
      <nav> {/* Use <nav> instead of <navbar> */}
        <button className={styles.white_btn} onClick={handleLogout}>
          <h3>Logout</h3>
        </button>      
      </nav>
      <div className={styles.foto}> {/* Use styles.foto for applying CSS class */}
        <img src={img} alt="img" />
      </div> 
    </div>
  );
};

export default Main;
