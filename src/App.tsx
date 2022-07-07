import React from 'react';
import {Provider} from 'react-redux';
import {store} from '$httpclient/store';
import MainNavigator from './core/navigation/main-navigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from './themes';

const safeAreaViewStyle = {flex: 1, backgroundColor: Colors.white};

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={safeAreaViewStyle}>
        <MainNavigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
