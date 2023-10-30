import styles from './index.module.css';

function ErrorInfo() {
  return (
    <div className={styles.error_info}>
      {'Something went wrong. Please, try again.'}
    </div>
  );
}

export default ErrorInfo;
