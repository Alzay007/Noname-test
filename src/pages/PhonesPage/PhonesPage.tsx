import { useEffect, useMemo } from 'react';
import { useAppSelector } from '../../features/hooks/hooks';
import styles from './PhonesPage.module.scss';


import { Loader } from '../../components/Loader';
import { GoodsList } from '../../components/GoodsList';
import { Title } from '../../components/Title/Title';

export const PhonesPage = () => {
  const { isLoading, phones } = useAppSelector(state => state.goodsReducer);

  const phonesList = useMemo(() => {
    return phones.filter((item) => item.category === 'phones')
  }, [phones])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={styles.phones}>
      {isLoading ?? <Loader />}

      <Title title={'Phones'} />

      <GoodsList itemsList={phonesList} />
    </section>
  );
};
