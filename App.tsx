/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import Home from './src/components/Home';

import SplashScreen from 'react-native-splash-screen';

const App: React.FC<React.ReactNode> = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return <Home />;
};

export default App;
