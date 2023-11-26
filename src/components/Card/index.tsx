import { useRouter } from 'next/router';
import styles from './index.module.css';
import { CardSearchType } from './type';
import Image from 'next/image';

export default function Card({ product }: CardSearchType) {
  const router = useRouter();

  return (
    <div
      className={styles.card}
      role="card"
      onClick={() => {
        router.push(`/products/${router.query.page}?id=${product.id}`);
      }}
    >
      {product.images ? (
        <div className={styles.image}>
          <Image
            fill
            sizes="100%"
            style={{ objectFit: 'contain' }}
            alt=""
            src={product.images[0]}
            priority={true}
          />
        </div>
      ) : null}
      <div>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.brand}>{product.brand}</p>
        <p className={styles.price}>{product.price}$</p>
      </div>
    </div>
  );
}
