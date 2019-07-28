import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Info from './components/Info';
import Headers from './components/Headers'
import Tab from './components/Tab'
import Product from './components/Product'
 
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Headers/>
          <Info/>
          <Tab/>
          <Product/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  
});
