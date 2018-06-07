import React from 'react';
import {AppRegistry, View, StyleSheet } from 'react-native';

export default class App extends React.Component {
  render() {
      return (
          <View style={styles.container}>
            <Text>This is for Schedule!</Text>
          </View>
      );
  }
}


const styles = StyleSheet.create({
    container: {
        flex:1
    }
})

AppRegistry.registerComponent('footalk', () => App);

