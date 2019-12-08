import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { InboxScreen } from './components';

const App: React.FC = () => {
  return (
    <Provider store={store}>
        <InboxScreen/>
    </Provider>
  );
}

export default App;
