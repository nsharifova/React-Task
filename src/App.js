import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navi from './components/navi/Navi';
import MyRoutes from './myRoutes/MyRoutes';
import store from './Redux/store';

function App() {
  return (
    <>
    <BrowserRouter>
    <Provider store={store}>
    <Navi/>
    <MyRoutes/>
    </Provider>
    </BrowserRouter>
  </>
  );
}

export default App;
