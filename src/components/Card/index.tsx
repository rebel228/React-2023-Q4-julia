import styles from './index.module.css';
import { CardSearchType } from './type';

export default function Card(props: CardSearchType) {
  const { product } = props;
  return (
    <div className={styles.card}>
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
