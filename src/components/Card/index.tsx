import { Component } from 'react';
import { CardSearchPropsType } from './type';

import styles from './index.module.css';

export default class Card extends Component<CardSearchPropsType> {
  constructor(props: CardSearchPropsType) {
    super(props);
  }
  render() {
    return (
      <div className={styles.card}>
        <p>Name:{this.props.person.name}</p>
        <p>Height:{this.props.person.height}</p>
        <p>Mass:{this.props.person.mass}</p>
        <p>Hair color:{this.props.person.hair_color}</p>
        <p>Eye color:{this.props.person.eye_color}</p>
        <p>Gender:{this.props.person.gender}</p>
        <p>Birth year:{this.props.person.birth_year}</p>
      </div>
    );
  }
}
