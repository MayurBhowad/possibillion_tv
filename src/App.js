import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/Search.component';
import SearchResult from './components/SearchResult.component';

// redux
import { Provider } from 'react-redux';
import store from './redux/store.redux';

function App() {
  return (
    <Provider store={store}>
      <div className="tv-layout">
        <Router>
          <Route path='/' exact component={Search} />
          <Route path='/searchResult' exact component={SearchResult} />
        </Router>
      </div>
    </Provider >
  );
}

export default App;
