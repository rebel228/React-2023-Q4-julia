import { useEffect, useState, useCallback } from 'react';
import { SearchBarPropsType } from './types';

export default function SearchBar(props: SearchBarPropsType) {
  const [word, setWord] = useState<string>('');

  const { search } = props;

  const initialSearch = useCallback(() => {
    const localStorageSearch = localStorage.getItem('search');
    if (localStorageSearch) {
      setWord(localStorageSearch);
      search(localStorageSearch);
    } else {
      search(word.trim());
    }
  }, []);

  useEffect(() => {
    initialSearch();
  }, [initialSearch]);

  return (
    <div className="top">
      <input
        value={word}
        className="input"
        placeholder="search..."
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <button className="button" onClick={() => props.search(word.trim())}>
        <img className="img-search" src="./loupe.svg"></img>
      </button>
    </div>
  );
}
