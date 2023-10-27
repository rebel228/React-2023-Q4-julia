import { Component } from 'react';
import { SearchStateType } from './types';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

export default class SearchApp extends Component<SearchStateType> {
  state = {
    fetchedData: {
      results: [],
    },
    loading: false,
  };

  search = (word: string) => {
    this.setState({ loading: true });
    fetch(`https://swapi.dev/api/people/?search=${word}`)
      .then((res) => res.json())
      .then((fetchedData) => {
        this.setState({ fetchedData });
        this.setState({ loading: false });
      });
  };

  //   componentDidMount() {

  //   }

  render() {
    const { fetchedData } = this.state;
    const { results } = fetchedData;

    return (
      <div className="container">
        <SearchBar search={this.search} />
        <SearchResults results={results} loading={this.state.loading} />
      </div>
    );
  }
}
