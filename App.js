import React from 'react';
import InputAreaContainer from './src/container/input_area_container';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './src/reducer/reducer';
import ListContainer from './src/container/list_container';

const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <InputAreaContainer />
        <ListContainer />
      </Provider>
    );
  }
}

export default App;
