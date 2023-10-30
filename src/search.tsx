import { Component } from 'react';
import { SearchStateType } from './types';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

export default class SearchApp extends Component {
  state: SearchStateType = {
    fetchedData: {
      results: [],
    },
    loading: false,
    error: undefined,
  };
  search = (word: string) => {
    this.setState({ loading: true });
    fetch(`https://swapi.dev/api/people?page=1${word ? `&search=${word}` : ''}`)
      .then((res) => res.json())
      .then((fetchedData) => {
        this.setState({ fetchedData });
        this.setState({ loading: false });
        localStorage.setItem('search', word);
      })
      .catch((error: Error) => {
        this.setState({ loading: false });
        this.setState({ error: error });
        throw new Error(JSON.stringify(error));
      });
  };

  render() {
    const { fetchedData } = this.state;
    const { results } = fetchedData;

    return (
      <div className="container">
        <SearchBar search={this.search} />
        <SearchResults
          results={results}
          loading={this.state.loading}
          error={this.state.error}
        />
      </div>
    );
  }
}
