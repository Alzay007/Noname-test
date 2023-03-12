import styles from './LoginPage.module.scss';
import { Button, FormGroup, TextField } from "@mui/material";
import { NavLink } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <div className={styles.login}>
      <div className={styles.login__content}>
        <h1 className={styles.login__title}>Sign In</h1>

        <FormGroup className={styles.login__form}>
          <TextField
            label={"Email"}
            name="email"
            placeholder="Email"
            autoComplete="off"
            value=''
          />

          <TextField
            label={"Password"}
            name="password"
            type="password"
            placeholder="Password"
            value=''
          />

          <Button className={styles.login__form_btn} variant={"outlined"}>Sign In</Button>
        </FormGroup>

        <p className={styles.login__text}>Don't you have an account?</p>

        <div className={styles.login__signUp}>
          <div className={styles.login__google}>
            <div className={styles.login__google_wrap}>
              <img
                className={styles.login__google_icon}
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
            </div>
            <p className={styles.login__google_text}><b>Sign in with google</b></p>
          </div>

          <NavLink to='/registration'>
            <button className={styles.login__signUp_bn}>Sign Up</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}