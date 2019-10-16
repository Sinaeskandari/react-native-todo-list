/* eslint-disable no-alert */
import React from 'react';
import {View, Button, TextInput} from 'react-native';
import {add_todo} from '../action/action';

class InputArea extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: '',
    };
  }
  handle_add() {
    if (this.state.todo === '') {
      alert('enter something');
    } else {
      this.props.dispatch(add_todo(this.state.todo));
    }
  }
  render() {
    return (
      <View>
        <TextInput
          placeholder="To Do"
          onChangeText={text => {
            this.setState({todo: text});
          }}
        />
        <Button title="add" onPress={() => this.handle_add()} />
      </View>
    );
  }
}

export default InputArea;
