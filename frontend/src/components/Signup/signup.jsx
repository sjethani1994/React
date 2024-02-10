import React from 'react'
import { useState } from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import styles from './style.module.css';
import Navbar from "../../Navbar/Navbar";
import Footer from '../footer/Footer';

function Signup() {
  const [data,setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    date: "",
    minAmount: "",
    maxAmount: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input}) => {
    setData({...data, [input.name]: input.value});
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:7000/api/users";
      const {data: res} = await axios.post(url, data);
      navigate("/Login");
      navigate("/");
      console.log(res.message);
    } catch (error) {
      if(
        error.response && 
        error.response.status >= 400 &&
        error.response.status <= 500
      ){
        setError(error.response.data.message)
      }
    }
  };

  return (
    <div>
      <Navbar/>
      <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h2>Welcome</h2>

          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Validate
            </button>
            </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h2>Register for Auction</h2>
            <input type="text" 
            placeholder='First Name'
            name='firstName'
            onChange={handleChange}
            value={data.firstName}
            required
            className={styles.input}
            />

            <input type='text'
            placeholder='Last Name'
            name='lastName'
            onChange = {handleChange}
            value={data.lastName}
            required
            className={styles.input}
            />
            <input
            type='email'
            placeholder='Email'
            name='email'
            onChange={handleChange}
            value={data.email}
            required
            className={styles.input}
            />
            <input
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleChange}
            value={data.password}
            required
            className={styles.input}
            />
            <input
            type='text'
            placeholder='Address'
            name='address'
            onChange={handleChange}
            value={data.address}
            required
            className={styles.input}
            />
            <input
            type='date'
            placeholder='Date'
            name='date'
            onChange={handleChange}
            value={data.date}
            required
            className={styles.input}
            />
            <input
            type='text'
            placeholder='Min-Amount'
            name='minAmount'
            onChange={handleChange}
            value={data.minAmount}
            required
            className={styles.input}
            />
            <input
            type='text'
            placeholder='Max Amount'
            name='maxAmount'
            onChange={handleChange}
            value={data.maxAmount}
            required
            className={styles.input}
            />

            {error && <div className={styles.error_msg}>{error}</div>}
            <button type='submit' className={styles.green_btn}>
              <h4>Submit</h4>
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Signup;