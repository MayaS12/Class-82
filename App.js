import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './components/TabNavigator'
import DrawerNavigator from './components/DrawerNavigator'

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({})
