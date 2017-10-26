import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TableOfContents extends React.Component {
  render() {
    return (
      <View style={styles.table}>
        <Text style={styles.divider} />
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
    borderBottom: 2 'solid' '#fafafa',
  },
});
