import { useState } from 'react';
import styles from './index.module.css';

function ShowErrorInfo() {
  const [showErrorInfo, setShowErrorInfo] = useState<boolean>();

  if (showErrorInfo) {
    throw Error('Error!');
  }

  return (
    <button className={styles.error_btn} onClick={() => setShowErrorInfo(true)}>
      Error!
    </button>
  );
}

export default ShowErrorInfo;
