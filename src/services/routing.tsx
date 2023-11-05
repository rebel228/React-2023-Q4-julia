import { Route, Routes, Navigate } from 'react-router-dom';
import Search from '../components/Search';
import Details from '../components/Details';

function RoutingApp() {
  return (
    <Routes>
      <Route path="*" element={<p>not found</p>} />
      <Route path="/:page" element={<Search />}>
        <Route path="product" element={<Details />} />
      </Route>
      <Route path="/" element={<Navigate to="/1" />} />
    </Routes>
  );
}
export default RoutingApp;
