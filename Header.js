import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

export default class Header extends React.PureComponent {
  render() {
    return (
      <View style={styles.header}>
        <TouchableHighlight onPress={() => {
              this.props.nav('TableOfContents');
            }}>
          <Image
            style={styles.image} source={require('./ic_menu_2x.png')}
          />
        </TouchableHighlight>
        <Text style={styles.headerText}>Genesis 1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 0,
    backgroundColor: '#918f84',
    zIndex: 2,
  },
  image: {
    marginLeft: 10,
    marginTop: 10,
  },
  headerText: {
    color: '#FDF7F7',
    fontFamily: 'Avenir',
    fontSize: 40,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
});
