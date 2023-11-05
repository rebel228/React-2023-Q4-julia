import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';
import Pagination from '../Pagination';
import { Outlet, useParams } from 'react-router-dom';

export default function Search() {
  const [results, setResults] = useState();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<Error | boolean>();
  const [searchedWord, setSearchedWord] = useState<string>('');
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const { page: pageFromURL } = useParams();
  const [numbersPerPage, setNumbersPerPage] = useState<number>(10);

  const search = (word?: string, page?: number) => {
    let w: string;
    let p: number;
    word ? (w = word) : (w = searchedWord);
    page ? (p = page) : pageFromURL ? (p = +pageFromURL) : (p = 1);
    setLoading(true);
    fetch(
      `https://dummyjson.com/products${
        w ? `/search?q=${w}&` : '?'
      }limit=${numbersPerPage}&skip=${(p - 1) * 10}`
    )
      .then((res) => res.json())
      .then((fetchedData) => {
        setResults(fetchedData.products);
        setTotalProducts(fetchedData.total);
        setError(false);
        setLoading(false);
        localStorage.setItem('search', w);
      })
      .catch((error: Error) => {
        setLoading(false);
        setError(error);
        throw new Error(JSON.stringify(error));
      });
  };

  useEffect(() => {
    const localStorageSearch = localStorage.getItem('search');
    if (localStorageSearch) {
      setSearchedWord(localStorageSearch);
      search(localStorageSearch, 1);
    } else {
      search();
    }
  }, [pageFromURL, numbersPerPage]);

  return (
    <div className="wrapper">
      <div className="container">
        <SearchBar
          search={search}
          setWord={setSearchedWord}
          word={searchedWord}
        />
        <SearchResults results={results} loading={loading} error={error} />
        {!loading && results && (
          <Pagination
            totalProducts={totalProducts}
            setNumbersPerPage={setNumbersPerPage}
            numbersPerPage={numbersPerPage}
          />
        )}
      </div>

      <Outlet />
    </div>
  );
}
