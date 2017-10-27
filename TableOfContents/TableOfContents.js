import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Chapters from './Chapters';

export default class TableOfContents extends React.Component {
  render() {
    return (
      <View style={styles.table}>
        <Text style={styles.divider}>
        </Text>
        <Chapters />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  table: {
    flex: 1,
    backgroundColor: '#918f84',
  },
  divider: {
    flex: 1,
    borderColor: '#fafafa',
    borderWidth: 2,
  },
});
