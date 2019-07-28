
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, SafeAreaView, View } from 'react-native';
import MaterialTabs from 'react-native-material-tabs';

export default class Tab extends Component {
  state = {
    selectedTab: 0,
  };

  setTab(tab) {
    this.setState({ selectedTab: tab });
  }

  render() {
    return (
       
      <SafeAreaView style={styles.container}>
        <MaterialTabs
          items={[' 15    Seling', ' 20   Sold', '23 Reviews', ' 84  Faves']}
          selectedIndex={this.state.selectedTab}
          onChange={this.setTab.bind(this)}
          
          barColor="gray"
          indicatorColor="#fffe94"
          activeTextColor="black"
          //textStyle={{ fontFamily: 'Papyrus' }}
        />
      </SafeAreaView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:2,
  },
   
});

AppRegistry.registerComponent('Example', () => Tab);