import { useEffect, useState } from 'react';
import { SearchBarPropsType } from './types';

export default function SearchBar(props: SearchBarPropsType) {
  const [word, setWord] = useState<string>('');

  useEffect(() => {
    const localStorageSearch = localStorage.getItem('search');
    if (localStorageSearch) {
      setWord(localStorageSearch);
      props.search(localStorageSearch);
    } else {
      props.search(word.trim());
    }
  });
  const handleSetWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  return (
    <div className="top">
      <input
        value={word}
        className="input"
        placeholder="search..."
        onChange={() => {
          handleSetWord;
        }}
      />
      <button className="button" onClick={() => props.search(word.trim())}>
        <img className="img-search" src="./loupe.svg"></img>
      </button>
    </div>
  );
}
