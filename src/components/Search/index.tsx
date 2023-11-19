import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';
import Pagination from '../Pagination';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

export default function Search() {
  const results = useAppSelector((state) => state.search.results);
  const loading = useAppSelector((state) => state.search.loading);

  return (
    <div className="wrapper">
      <div className="container">
        <SearchBar />
        <SearchResults />
        {!loading && results && <Pagination />}
      </div>

      <Outlet />
    </div>
  );
}
