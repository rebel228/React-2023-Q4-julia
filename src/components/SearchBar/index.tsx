import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSearchContext } from '../../Contexts/searchContext';
import { getProducts } from '../../api';

export default function SearchBar() {
  const [searchedWord, setSearchedWord] = useState<string>('');
  const [isFirstSearch, setIsFirstSearch] = useState<boolean>(true);
  const navigate = useNavigate();
  const { page: pageFromURL } = useParams();
  const { setLoading, numbersPerPage, setResults, setTotalProducts, setError } =
    useSearchContext();

  const search = () => {
    localStorage.setItem('search', searchedWord);
    setLoading(true);
    if (pageFromURL) {
      getProducts(numbersPerPage, searchedWord, +pageFromURL)
        .then((fetchedData) => {
          setResults(fetchedData.products);
          setTotalProducts(fetchedData.total);
          setLoading(false);
        })
        .catch((error: Error) => {
          setLoading(false);
          setError(error.message);
          throw new Error(JSON.stringify(error));
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
