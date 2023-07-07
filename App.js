import React from "react";
import './src/firebaseServices';
import 'react-native-gesture-handler';
import MainNavigator from "./src/navigator";
import { Provider } from "react-redux";
import { store } from "./src/store"

const App = () => {
  return (
    <Provider store={store}>
    <MainNavigator />
    </Provider>
  )
}

export default App;