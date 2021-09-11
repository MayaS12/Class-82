import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ProfileScreen from '../screens/ProfileScreen'
import TabNavigator from './TabNavigator'

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
    render() {
        return (
            <Drawer.Navigator>
                <Drawer.Screen name = "Home" component = {TabNavigator} />
                <Drawer.Screen name = "Profile" component = {ProfileScreen} />
            </Drawer.Navigator>
        )
    }
}

const styles = StyleSheet.create({})
