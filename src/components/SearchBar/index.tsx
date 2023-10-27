import { Component } from 'react';
import { SearchBarPropsType, SearchBarStateType } from './types';

export default class SearchBar extends Component<
  SearchBarPropsType,
  SearchBarStateType
> {
  constructor(props: SearchBarPropsType) {
    super(props);

    this.state = {
      value: '',
    };
  }
  render() {
    return (
      <div className="top">
        <input
          value={this.state.value}
          className="input"
          placeholder="search..."
          onChange={(event) => {
            this.setState({ value: event.target.value });
          }}
        />
        <button
          className="button"
          onClick={() => this.props.search(this.state.value)}
        >
          <img className="img-search" src="./public/loupe.svg"></img>
        </button>
      </div>
    );
  }
}
