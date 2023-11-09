import { useEffect, useState } from 'react';
import styles from './index.module.css';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Product } from '../../types';

export default function Details() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<Product>();
  const navigate = useNavigate();
  const { page: pageFromURL } = useParams();

  const getDetailedProduct = () => {
    fetch(`https://dummyjson.com/products/${searchParams.get('id')}`)
      .then((res) => res.json())
      .then((fetchedData) => {
        setData(fetchedData);
      });
  };

  useEffect(() => {
    getDetailedProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <div className={styles.detailed_card_container}>
      <button
        className={styles.close}
        onClick={() => {
          navigate(`/${pageFromURL}`);
        }}
      >
        close
      </button>
      <div className={styles.card}>
        {data && data.images ? (
          <img className={styles.image} src={data.images[0]} />
        ) : null}

        <div>
          <p className={styles.title}>{data && data.title}</p>
          <p className={styles.brand}>{data && data.brand}</p>
          <p className={styles.price}>{data && data.price}$</p>
          <p className={styles.description}>{data && data.description}</p>
          <p className={styles.rating}>{data && data.rating}</p>
        </div>
      </div>
    </div>
  );
}
