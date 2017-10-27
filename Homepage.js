import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Footer from './Footer';
import Header from './Header';

export default class Homepage extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  nav = (component) => {
    console.log('called nav');
    this.props.navigation.navigate(component);
  };

  render() {
    return (
      <View style={styles.container}>
        <Header nav={this.nav} />
        <View style={styles.overlay}>
          <Text style={styles.heavens}>
            The heavens declare the glory of God, and the sky above proclaims his handiwork.
          </Text>
          <Image source={require('./fullsizeoutput_155.png')} />
        </View>
        <Footer nav={this.nav} />
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
  overlay: {
    flex: 7,
    justifyContent: 'center',
    backgroundColor: 'rgba(253, 183, 73, .15),'
  },
  heavens: {
    alignSelf: 'center',
    textAlign: 'center',
    color: '#44aa66',
    position: 'absolute',
    fontWeight: 'bold',
  },
});
