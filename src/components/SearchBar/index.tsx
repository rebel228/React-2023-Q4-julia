import { Component } from 'react';
import { SearchBarPropsType, SearchBarStateType } from './types';

export default class SearchBar extends Component<
  SearchBarPropsType,
  SearchBarStateType
> {
  constructor(props: SearchBarPropsType) {
    super(props);

    this.state = {
      word: '',
    };
  }

  componentDidMount() {
    const localStorageSearch = localStorage.getItem('search');
    if (localStorageSearch) {
      this.setState({ word: localStorageSearch });
      this.props.search(localStorageSearch);
    } else {
      this.props.search(this.state.word.trim());
    }
  }
  render() {
    return (
      <div className="top">
        <input
          value={this.state.word}
          className="input"
          placeholder="search..."
          onChange={(event) => {
            this.setState({ word: event.target.value });
          }}
        />
        <button
          className="button"
          onClick={() => this.props.search(this.state.word.trim())}
        >
          <img className="img-search" src="./loupe.svg"></img>
        </button>
      </div>
    );
  }
}
