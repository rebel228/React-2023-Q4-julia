import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';
import Pagination from '../Pagination';
import { Outlet } from 'react-router-dom';
import { useSearchContext } from '../../Contexts/searchContext';

export default function Search() {
  const { results, loading } = useSearchContext();

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
