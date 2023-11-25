import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useAppSelector } from "../../hooks/redux";
import { useActions } from "../../hooks/actions";
import { useRouter } from "next/router";

export default function Pagination() {
  const [pages, setPages] = useState<number[]>([]);
  const totalProducts = useAppSelector((state) => state.search.totalProducts);
  const numbersPerPage = useAppSelector((state) => state.search.numbersPerPage);
  const router = useRouter();
  const { setNumbersPerPage } = useActions();

  const changeNumbersPerPage = (number: number) => {
    setNumbersPerPage(number);
    router.push("/products/1");
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
            router.query.page && +router.query.page === 1
              ? styles.btn_disable
              : ""
          }
          onClick={() => {
            router.query.page &&
              router.push(`/products/${+router.query.page - 1}`);
          }}
        >
          <div>Prev</div>
        </li>
        {pages &&
          pages.map((page, index) => (
            <li
              className={
                router.query.page && +router.query.page === page
                  ? styles.active
                  : ""
              }
              key={index}
              onClick={() => router.push(`/products/${page}`)}
            >
              <div>{page}</div>
            </li>
          ))}
        <li
          className={
            router.query.page && +router.query.page === pages[pages.length - 1]
              ? styles.btn_disable
              : ""
          }
          onClick={() => {
            router.query.page &&
              router.push(`/products/${+router.query.page + 1}`);
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
