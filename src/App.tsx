import RoutingApp from './services/routing';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <RoutingApp />
      </Provider>
    </div>
  );
}

export default App;
