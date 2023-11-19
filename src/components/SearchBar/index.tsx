import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProducts } from '../../api';
import { testids } from '../../constants/testids';
import { useAppSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/actions';

export default function SearchBar() {
  const [isFirstSearch, setIsFirstSearch] = useState<boolean>(true);
  const navigate = useNavigate();
  const { page: pageFromURL } = useParams();
  const searchedWord = useAppSelector((state) => state.search.searchedWord);
  const numbersPerPage = useAppSelector((state) => state.search.numbersPerPage);
  const {
    setLoading,
    setResults,
    setTotalProducts,
    setError,
    setSearchedWord,
  } = useActions();

  const search = () => {
    localStorage.setItem('search', searchedWord);
    setLoading(true);
    if (pageFromURL) {
      getProducts(numbersPerPage, searchedWord, Number(pageFromURL))
        .then((fetchedData) => {
          setResults(fetchedData.products);

          setTotalProducts(fetchedData.total);
          setLoading(false);
        })
        .catch((error: Error) => {
          setLoading(false);
          setError(error.message);
        });
    }
  };

  useEffect(() => {
    const localStorageSearch = localStorage.getItem('search');
    if (localStorageSearch) {
      setSearchedWord(localStorageSearch);
      navigate('/1');
    } else {
      search();
      setIsFirstSearch(false);
    }
  }, []);

  useEffect(() => {
    if (searchedWord !== '' && isFirstSearch) {
      search();
      setIsFirstSearch(false);
    }
  }, [searchedWord]);

  useEffect(() => {
    if (!isFirstSearch) {
      search();
    }
  }, [pageFromURL, numbersPerPage]);

  return (
    <div className="top">
      <input
        data-testid={testids.searchInput}
        value={searchedWord}
        className="input"
        placeholder="search..."
        onChange={(e) => {
          setSearchedWord(e.target.value);
        }}
      />
      <button
        className="button"
        onClick={() => {
          navigate('/1');
          search();
        }}
        role="search-button"
      >
        <img className="img-search" src="/loupe.svg" />
      </button>
    </div>
  );
}
