import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.overlay}>
          <Text style={styles.heavens}>
            The heavens declare the glory of God, and the sky above proclaims his handiwork.
          </Text>
          <Image source={require('./fullsizeoutput_155.png')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 0,
  },
  overlay: {
    flexGrow: 1,
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
