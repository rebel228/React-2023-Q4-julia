import { Component } from 'react';
import styles from './index.module.css';

export default class Loader extends Component {
  render() {
    return <div className={styles.loader} />;
  }
}
