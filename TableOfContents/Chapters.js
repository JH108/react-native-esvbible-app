import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

const d = [
  'Genesis',
  'Exodus',
  'Lev',
  'Numbers',
  'Deut',
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.chapters}>
        <View style={styles.headers}>
          <Text style={styles.headerText}>Chapters</Text>
        </View>
        <ScrollView style={styles.body}>
          {
            d.map((chapter, key) => (
              <Text key={key} style={styles.bodyText}>
                {chapter}
              </Text>
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chapters: {
    flex: 1,
  },
  headers: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'center',
  },
  body: {
    alignSelf: 'center',
  },
  bodyText: {
    borderWidth: 1,
    borderColor: '#979797',
    backgroundColor: '#fdf7f7',
  },
});
