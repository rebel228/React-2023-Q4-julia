import { Component } from 'react';
import { SearchResultsPropsType } from './types';
import { Person } from '../../types';
import Loader from '../Loader';
import Card from '../Card';
import styles from './index.module.css';

export default class SearchResults extends Component<SearchResultsPropsType> {
  constructor(props: SearchResultsPropsType) {
    super(props);
  }
  render() {
    return (
      <div className="bottom">
        {this.props.loading ? (
          <Loader />
        ) : (
          <div className={styles.cards_container}>
            {this.props.results &&
              this.props.results.map((person: Person, index: number) => (
                <Card key={index} person={person} />
              ))}
          </div>
        )}
      </div>
    );
  }
}
