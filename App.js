import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Header from './Header';
import Homepage from './Homepage';
import TableOfContents from './TableOfContents/TableOfContents.js';
import Reader from './Reader';

const Nav = StackNavigator({
  Home: { screen: Homepage },
  TableOfContents: { screen: TableOfContents },
  Reader: { screen: Reader },
});

export default class App extends React.Component {
  render() {
    return (
      <Nav />
    );
  }
}
