import { Component } from 'react';
import { SearchResultsPropsType } from './types';
import { Person } from '../../types';
import Loader from '../Loader';

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
          <>
            {this.props.results &&
              this.props.results.map((person: Person, index: number) => (
                <div key={index}>
                  <p>{person.name}</p>
                </div>
              ))}
          </>
        )}
      </div>
    );
  }
}
