import { Product } from '../../types/Product';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Card.module.scss';
import { useAppDispatch, useAppSelector } from '../../features/hooks/hooks';
import { addItem, removeItem } from '../../features/reducers/cartSlice';
import { BASE_URL } from '../../features/reducers/actionCreators';

interface Props {
  product: Product;
}

export const Card: React.FC<Props> = ({ product }) => {
  const { name, fullPrice, capacity, screen, rating, image } = product;
  const dispatch = useAppDispatch();

  const { items } = useAppSelector(state => state.cartReducer)

  const isCardInArray = items.includes(product.id);

  const handleSetCardInData = () => {
    if (!isCardInArray) {
      dispatch(addItem(product.id));
    } else {
      dispatch(removeItem(product.id));
    }
  };

  return (
    <div className={styles.card}>
      <NavLink to={`/${product.itemId}`}>
        <img
          src={`${BASE_URL}/${image}`}
          alt="card-logo"
          className={styles.card_logo}
        />
      </NavLink>

      <span className={styles.card_title}>{name}</span>
      <div className={styles.card_price}>
        <span className={styles.card_newPrice}>${fullPrice}</span>
      </div>
      <div className={styles.card_characteristics}>
        <div className={styles.card_description}>
          <span className={styles.card_text}>Rating</span>
          <div className={styles.card_rating}>
            <span className={styles.card_value}>{rating}</span>
            <div className={styles.card_star}></div>
          </div>
        </div>
        <div className={styles.card_description}>
          <span className={styles.card_text}>Capacity</span>
          <span className={styles.card_value}>{capacity}</span>
        </div>
        <div className={styles.card_description}>
          <span className={styles.card_text}>Screen</span>
          <span className={styles.card_value}>{screen}</span>
        </div>
      </div>
      <div className={styles.card_buttons}>
        <button
          className={classNames(styles.card_checkout, {
            [styles.card_uncheckout]: isCardInArray,
          })}
          onClick={handleSetCardInData}
        >
          {isCardInArray ? 'Added' : 'Add to cart'}
        </button>
      </div>
    </div>
  );
};
