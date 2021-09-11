import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import FeedScreen from '../screens/FeedScreen'
import CreateScreen from '../screens/CreateScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createMaterialBottomTabNavigator();

export default class TabNavigator extends Component {
    render() {
        return (
            <Tab.Navigator 
            labeled = {false}
            barStyle = {styles.bottomTabStyle}
            screenOptions = {({route})=>({
                tabBarIcon: ({focused,color,size})=>{
                    let iconName
                    if(route.name === "Feed Stories"){
                        iconName = focused?'home':'home-outline'
                    }else if(route.name === "Create Stories"){
                        iconName = focused?'add-circle':'add-circle-outline'
                    }
                    return(
                        <Ionicons name = {iconName} color = {'skyblue'} size = {30}/>
                    )
                }
            })}
            tabBarOptions = {{
                activeTintColor:'#ee8249',
                inactiveTintColor: 'grey',
            }}>
                <Tab.Screen name = "Feed Stories" component = {FeedScreen} />
                <Tab.Screen name = "Create Stories" component = {CreateScreen} />
            </Tab.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    bottomTabStyle: {
      backgroundColor: "#2f345d",
      height: "8%",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      overflow: "hidden",
      position: "absolute"
    },
  });  