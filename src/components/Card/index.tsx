import { useRouter } from "next/router";
import styles from "./index.module.css";
import { CardSearchType } from "./type";

export default function Card({ product }: CardSearchType) {
  const router = useRouter();

  return (
    <div
      className={styles.card}
      role="card"
      onClick={() => {
        router.push(`/products/${router.query.page}/product?id=${product.id}`);
      }}
    >
      {product.images ? (
        <img className={styles.image} src={product.images[0]} />
      ) : null}
      <div>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.brand}>{product.brand}</p>
        <p className={styles.price}>{product.price}$</p>
      </div>
    </div>
  );
}
