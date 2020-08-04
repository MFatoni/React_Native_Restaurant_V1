/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platoform, StyleSheet, View, Text, Button} from 'react-native';
import Halaman2 from './Halaman2';
import {createStackNavigator, createAppContainer} from 'react-navigation-stack';

class App extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => {
            this.props.navigation.navigate('Halaman2');
          }}
          title="Halaman 2"></Button>
      </View>
    );
  }
}

const Router = createStackNavigator(
  {
    App: {
      screen: App,
    },
    Halaman2: {
      screen: Halaman2,
    },
  },
  {initialRouteName: 'App'},
);

export default createAppContainer(Router);
