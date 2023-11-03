import { Route, Routes } from 'react-router-dom';
import Search from '../components/Search/Search';

function RoutingApp() {
  return (
    <Routes>
      <Route path="*" element={<p>not found</p>} />
      <Route path="/" element={<Search />} />
    </Routes>
  );
}
export default RoutingApp;
