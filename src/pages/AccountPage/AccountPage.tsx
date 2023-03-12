import { Title } from "../../components/Title";
import styles from './AccountPage.module.scss';

export const AccountPage = () => {
  return (
    <section className={styles.account}>
      <Title title={'Account'} />

      <h1 className={styles.account__title}>Welcome</h1>
    </section>
  )
}