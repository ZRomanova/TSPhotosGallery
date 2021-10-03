import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux'
import { AppNavigation } from './src/navigation/AppNavigation';
import store from './src/store'
import Icon from 'react-native-vector-icons/Entypo'

Icon.loadFont();


export default function App() {

  return (
    <Provider store={store}>
      <AppNavigation/>
    </Provider>
  );
}
