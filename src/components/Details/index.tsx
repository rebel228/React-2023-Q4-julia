import { useEffect } from 'react';
import styles from './index.module.css';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useLazyGetProductQuery } from '../../features/apiSlice';
import Loader from '../Loader';

export default function Details() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { page: pageFromURL } = useParams();
  const [getProduct, { data: dataProduct, isLoading }] =
    useLazyGetProductQuery();

  useEffect(() => {
    if (searchParams.get('id')) {
      getProduct(searchParams.get('id'));
    }
  }, [searchParams]);

  return (
    <div className={styles.detailed_card_container} role="detailed-card">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <button
            className={styles.close}
            onClick={() => {
              navigate(`/${pageFromURL}`);
            }}
          >
            close
          </button>
          {dataProduct ? (
            <div className={styles.card}>
              {dataProduct.images ? (
                <img className={styles.image} src={dataProduct.images[0]} />
              ) : null}

              <div>
                <p className={styles.title}>{dataProduct.title}</p>
                <p className={styles.brand}>{dataProduct.brand}</p>
                <p className={styles.price}>{dataProduct.price}$</p>
                <p className={styles.description}>{dataProduct.description}</p>
                <p className={styles.rating}>{dataProduct.rating}</p>
              </div>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
