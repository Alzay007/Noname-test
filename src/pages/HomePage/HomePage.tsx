import { Categories } from "../../components/Categories/Categories";
import { Slider } from "../../components/Swiper"
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.home__title}>Welcome to Apple Shop!</h1>

      <Slider />
      <Categories />
    </div>
  )
}