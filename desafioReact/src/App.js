/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
//import {ListaScreen} from './screens';
import CreateTaskScreen from './screens/CreateTaskScreen';//trocar pra lista screen

export default class App extends Component {
  render() {
    return (
      <CreateTaskScreen/>//trocar pra lista screen
    );
  }
}
