import React from 'react';
import {Provider} from 'react-redux';
import {store} from '$httpclient/store';
import MainNavigator from './core/navigation/main-navigator';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
