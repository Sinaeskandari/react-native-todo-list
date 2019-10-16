import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';

class List extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container} alignItems="center">
        {this.props.todo.map((item, index) => {
          return (
            <Text key={index} style={styles.text}>
              {String(index + 1)}- {item}
            </Text>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginBottom: 5,
  },
});
export default List;
