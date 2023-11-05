import { useEffect, useState } from 'react';
import styles from './index.module.css';
import { PaginationPropsType } from './types';
import { useParams, useNavigate } from 'react-router-dom';

export default function Pagination(props: PaginationPropsType) {
  const [pages, setPages] = useState<number[]>([]);
  const { totalProducts, setNumbersPerPage, numbersPerPage } = props;

  const { page: pageFromURL } = useParams();
  const navigate = useNavigate();

  const changeNumbersPerPage = (number: number) => {
    setNumbersPerPage(number);
    navigate('/1');
  };

  useEffect(() => {
    if (totalProducts && numbersPerPage) {
      setPages(
        Array.from(
          { length: Math.ceil(totalProducts / numbersPerPage) },
          (_, i) => i + 1
        )
      );
    }
  }, [totalProducts, numbersPerPage]);

  return (
    <>
      <ul className={styles.pagination}>
        <li
          className={
            pageFromURL && +pageFromURL === 1 ? styles.btn_disable : ''
          }
          onClick={() => {
            pageFromURL && navigate(`/${+pageFromURL - 1}`);
          }}
        >
          <div>Prev</div>
        </li>
        {pages &&
          pages.map((page, index) => (
            <li
              className={
                pageFromURL && +pageFromURL === page ? styles.active : ''
              }
              key={index}
              onClick={() => navigate(`/${page}`)}
            >
              <div>{page}</div>
            </li>
          ))}
        <li
          className={
            pageFromURL && +pageFromURL === pages[pages.length - 1]
              ? styles.btn_disable
              : ''
          }
          onClick={() => {
            pageFromURL && navigate(`/${+pageFromURL + 1}`);
          }}
        >
          <div>Next</div>
        </li>
        <div className={styles.product_count}>
          Show:
          <button
            onClick={() => changeNumbersPerPage(10)}
            className={
              numbersPerPage && numbersPerPage === 10
                ? `${styles.product_count_btn} ${styles.active}`
                : styles.product_count_btn
            }
          >
            10
          </button>
          <button
            onClick={() => {
              changeNumbersPerPage(20);
            }}
            className={
              numbersPerPage && numbersPerPage === 20
                ? `${styles.product_count_btn} ${styles.active}`
                : styles.product_count_btn
            }
          >
            20
          </button>
          <button
            onClick={() => {
              changeNumbersPerPage(30);
            }}
            className={
              numbersPerPage && numbersPerPage === 30
                ? `${styles.product_count_btn} ${styles.active}`
                : styles.product_count_btn
            }
          >
            30
          </button>
        </div>
      </ul>
    </>
  );
}
