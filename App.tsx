/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';

import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {persistor, store} from './src/Store';

import {AppNavigation} from './src/Navigation';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={backgroundStyle}>
          <FlipperAsyncStorage />
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <AppNavigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
