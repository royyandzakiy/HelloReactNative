import React, { Component } from 'react'
import {
  StackNavicator
} from 'react-navigation'
import Home from './src/Home';

export default StackNavigator({
  home: {
    screen: home,
    navicationOptions: {{navigation}}
  }
});

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      { /* KOSONG */ }
    )
  }
}

AppRegistry.registerComponent('App', () => App)
