import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class Homepage extends React.Component {
  render() {
    return (
      <View style={styles.overlay}>
        <Text style={styles.heavens}>
          The heavens declare the glory of God, and the sky above proclaims his handiwork.
        </Text>
        <Image source={require('./fullsizeoutput_155.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    flex: 7,
    justifyContent: 'center',
    backgroundColor: 'rgba(253, 183, 73, .15),'
  },
  heavens: {
    alignSelf: 'center',
    textAlign: 'center',
    color: '#44aa66',
    zIndex: 1,
    position: 'absolute',
    fontWeight: 'bold',
  },
});
