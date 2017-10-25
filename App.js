import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './Header';
import Homepage from './Homepage';
import Footer from './Footer';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Homepage />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
