import React from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';
import TextScreen from './components/TextScreen'
import PhotoScreen from './components/PhotoScreen'
import BarcodeScreen from './components/BarcodeScreen'
import AllergiesScreen from './components/AllergiesScreen'
import ProfileScreen from './components/ProfileScreen'
import Example from './components/Example'

const MainScreenNavigator = TabNavigator({
  Text: { screen: TextScreen },
  Photo: { screen: PhotoScreen },
  Barcode: { screen: BarcodeScreen },
  Allergies: { screen: AllergiesScreen },
  Profile: { screen: ProfileScreen },
});


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainScreenNavigator />
        <Example />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 24,
  },
  work: {
    flex: 9,
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: 20,
  },
  nav: {
    flex: 1,
    backgroundColor: '#40c4ff',
  },
});
