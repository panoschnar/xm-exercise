import React from "react";
import {
  dateIcon,
  clockIcon,
  placeIcon,
} from "../../../public/img/registerIcons";
import Image from "next/image";
import styles from "./Register.module.css";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [errorLogs, setErrorLogs] = useState({
    hasEnoughChar: false,
    hasNum: false,
    hasLow: false,
    hasUpper: false,
    hasSpChar: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(!isSubmitted);
    // Validation
    let errors = {};
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (/(?=.{8,15})/.test(password)) {
      setErrorLogs((prev) => ({ ...prev, hasEnoughChar: true }));
    }
    if (/(?=.*[a-z])/.test(password)) {
      setErrorLogs((prev) => ({ ...prev, hasLow: true }));
    }
    if (/(?=.*\d)/.test(password)) {
      setErrorLogs((prev) => ({ ...prev, hasNum: true }));
    }
    if (/(?=.*[A-Z])/.test(password)) {
      setErrorLogs((prev) => ({ ...prev, hasUpper: true }));
    }
    if (/(?=.*[#\[\]()@$&*!?|,.^/\\+\-_])/.test(password)) {
      setErrorLogs((prev) => ({ ...prev, hasSpChar: true }));
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted");
    }
  };
  return (
    <div className={styles.registerContainer}>
      <p className={styles.title}>- Register Here - </p>
      <p className={styles.subTitle}>
        Join us to celebrate our biggest night of the year.
      </p>
      <div className={styles.calendarContainer}>
        <div className={styles.calendarBox}>{dateIcon} 05 NOVEMBER 2022</div>
        <hr />
        <div className={styles.calendarBox}> {clockIcon} 16:00 – 23:00 </div>
        <hr />
        <div className={styles.calendarBox}>
          {placeIcon} Centara Grand & Bangkok Convention Centre, Bangkok
        </div>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formInputs}>
          <div>
            <label className={styles.inputLabel} htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              className={styles.inputField}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
          </div>
          <div>
            <label className={styles.inputLabel} htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              className={styles.inputField}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className={styles.error}>{errors.password}</span>
            )}
            <ul className={styles.passInfo}>
              <li
                style={{
                  color: isSubmitted
                    ? errorLogs.hasEnoughChar
                      ? "#29A643"
                      : "#d51820"
                    : "#959595",
                }}
              >
                8 - 15 characters
              </li>
              <li
                style={{
                  color: isSubmitted
                    ? errorLogs.hasNum
                      ? "#29A643"
                      : "#d51820"
                    : "#959595",
                }}
              >
                1 or more numbers
              </li>
              <li
                style={{
                  color: isSubmitted
                    ? errorLogs.hasLow
                      ? "#29A643"
                      : "#d51820"
                    : "#959595",
                }}
              >
                1 or more lower case letters
              </li>
              <li
                style={{
                  color: isSubmitted
                    ? errorLogs.hasUpper
                      ? "#29A643"
                      : "#d51820"
                    : "#959595",
                }}
              >
                1 or more upper case letters
              </li>
              <li
                style={{
                  color: isSubmitted
                    ? errorLogs.hasSpChar
                      ? "#29A643"
                      : "#d51820"
                    : "#959595",
                }}
              >
                1 or more special characters (#[]()@$&*!?|,.^/\+_-)
              </li>
            </ul>
          </div>
        </div>
        <button className={styles.registerBtn} type="submit">
          Register Now
        </button>
      </form>
      <p className={styles.newAccountText}>
        Don’t have an account? <a>Create one here </a> and register for the
        event
      </p>
      <p className={styles.termsText}>
        Terms and Conditions apply<span>*</span>. To read the full T&Cs, click
        <a> here</a>.
      </p>
    </div>
  );
};
export default Register;
