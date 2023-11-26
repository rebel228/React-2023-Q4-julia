import { useEffect, useState } from 'react';
import { testids } from '../../constants/testids';
import { useAppSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/actions';
import { useRouter } from 'next/router';

export default function SearchBar() {
  const [word, setWord] = useState<string>('');
  const router = useRouter();
  const searchedWord = useAppSelector((state) => state.search.searchedWord);
  const { setSearchedWord } = useActions();

  const search = async () => {
    setSearchedWord(word);
  };

  useEffect(() => {
    setWord(searchedWord);
    const localStorageSearch = localStorage.getItem('search');
    if (localStorageSearch) {
      router.push('/products/1');
    }
  }, []);

  return (
    <div className="top">
      <input
        data-testid={testids.searchInput}
        value={word}
        className="input"
        placeholder="search..."
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <button
        className="button"
        onClick={() => {
          router.push('/products/1');
          search();
        }}
        role="search-button"
      >
        <img className="img-search" src="/loupe.svg" />
      </button>
    </div>
  );
}
