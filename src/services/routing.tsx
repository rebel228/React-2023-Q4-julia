import { Route, Routes, Navigate } from 'react-router-dom';
import Search from '../components/Search';

function RoutingApp() {
  return (
    <Routes>
      <Route path="*" element={<p>not found</p>} />
      <Route path="/:page" element={<Search />} />
      <Route path="/" element={<Navigate to="/1" />} />
    </Routes>
  );
}
export default RoutingApp;
