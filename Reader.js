import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Reader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/bible/query?book=Genesis&chapter=1')
      .then(body => body.json())
      .then(json => this.setState({
        data: json.chapterText
      }))
  }
  render() {
    console.log(this.state.data);
    return (
      <View>
        <Text>
          This is the page for reading the text
          {this.state.data ? this.state.data : null}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#127744',
  },
  text: {
    fontSize: 16,
  },
});
