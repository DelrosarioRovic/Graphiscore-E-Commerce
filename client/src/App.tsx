import HeaderWrapper from './components/header/headerWrapper';
import Router from './router/router';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {

  return (
    <Provider store={store} >
      <div>
        <HeaderWrapper />
        <Router />
      </div>
    </Provider>
  )
}

export default App
