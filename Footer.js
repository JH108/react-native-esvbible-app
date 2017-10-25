import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Footer extends React.PureComponent {
  render() {
    return (
      <View style={styles.footer}>
        <Text style={styles.startReading}>Start Reading Now</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: '#918f84',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  startReading: {
    color: '#fdf7f7',
    textAlign: 'center',
    fontSize: 40
  },
});
