import styles from './index.module.css';
import { CardSearchType } from './type';

export default function Card(props: CardSearchType) {
  return (
    <div className={styles.card}>
      <p>Name: {props.person.name}</p>
      <p>Height: {props.person.height}</p>
      <p>Mass: {props.person.mass}</p>
      <p>Hair color: {props.person.hair_color}</p>
      <p>Eye color: {props.person.eye_color}</p>
      <p>Gender: {props.person.gender}</p>
      <p>Birth year: {props.person.birth_year}</p>
    </div>
  );
}
