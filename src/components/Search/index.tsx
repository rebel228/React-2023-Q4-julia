import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';
import Pagination from '../Pagination';
import { Outlet } from 'react-router-dom';

export default function Search() {
  return (
    <div className="wrapper">
      <div className="container">
        <SearchBar />
        <SearchResults />
        <Pagination />
      </div>

      <Outlet />
    </div>
  );
}
