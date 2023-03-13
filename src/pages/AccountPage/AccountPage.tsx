import { useAppDispatch } from "../../features/hooks/hooks";
import { removeUser } from "../../features/reducers/userSlice";
import { Title } from "../../components/Title";
import styles from './AccountPage.module.scss';
import { useNavigate } from "react-router-dom";

export const AccountPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(removeUser())
    navigate('/')
  }

  return (
    <section className={styles.account}>
      <Title title={'Account'} />

      <h2 className={styles.account__title}>Welcome</h2>

      <div className={styles.account__content}>
        <button className={styles.account__logOut} onClick={handleLogOut}>Logout</button>
      </div>
    </section>
  )
}