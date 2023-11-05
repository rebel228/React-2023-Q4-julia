import { useEffect, useState } from 'react';
import styles from './index.module.css';
import { PaginationPropsType } from './types';
import { useParams, useNavigate } from 'react-router-dom';

export default function Pagination(props: PaginationPropsType) {
  const [pages, setPages] = useState<number[]>([]);
  const { totalProducts } = props;
  const { page: pageFromURL } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (totalProducts) {
      setPages(
        Array.from({ length: Math.ceil(totalProducts / 10) }, (_, i) => i + 1)
      );
    }
  }, [totalProducts]);
  console.log(pages);
  return (
    <ul className={styles.pagination}>
      <li
        className={pageFromURL && +pageFromURL === 1 ? styles.btn_disable : ''}
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
    </ul>
  );
}
