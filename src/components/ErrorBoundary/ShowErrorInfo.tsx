import { Component } from 'react';
import styles from './index.module.css';

class ShowErrorInfo extends Component<
  Record<string, never>,
  { showError: boolean }
> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { showError: false };
  }
  showError = () => {
    this.setState({ showError: true });
  };
  render() {
    if (this.state.showError) {
      throw new Error('Error!');
    }
    return (
      <button className={styles.error_btn} onClick={this.showError}>
        Error!
      </button>
    );
  }
}

export default ShowErrorInfo;
