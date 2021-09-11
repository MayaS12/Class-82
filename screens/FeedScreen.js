import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, SafeAreaView, Platform, StatusBar, Image } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import StoryCard from '../components/StoryCard'

let customFonts = {
    'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf')
}

let stories = require('../temp_stories.json')

export default class FeedScreen extends Component {
    constructor(){
        super();
        this.state = {
            fontsloaded: false,
        }
    }

    loadFonts = async () => {
        await Font.loadAsync(customFonts)
        this.setState({
            fontsloaded: true
        })
    }

    componentDidMount(){
        this.loadFonts();
    }

    keyExtractor = (item, index) => {
        index.toString();
    }

    renderItem = ({item: story}) => {
        return(
            <StoryCard story = {story}/>
        )
    }

    render() {
        if(this.state.fontsloaded === false){
            return(
                <AppLoading/>
            )
        }else{
            return (
                <View style = {styles.container}>
                    <SafeAreaView style = {styles.androidSafeArea}/>
                    <View style = {styles.appTitle}>
                        <View style = {styles.appIcon}>
                            <Image style = {styles.iconImage} source = {require('../assets/logo.png')}/>
                        </View>
                        <View style = {styles.appTitleTextContainer}>
                            <Text style = {styles.appTitleText}>
                                Story Telling App!
                            </Text>
                        </View>
                    </View>

                    <View style = {styles.cardContainer}>
                        <FlatList 
                        keyExtractor = {this.keyExtractor}
                        renderItem = {this.renderItem}
                        data = {stories}/>
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#15193c"
      },
      androidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
      },
      appTitle: {
        flex: 0.07,
        flexDirection: "row"
      },
      appIcon: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center"
      },
      iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
      },
      appTitleTextContainer: {
        flex: 0.7,
        justifyContent: "center"
      },
      appTitleText: {
        color: "white",
        fontSize: RFValue(28),
        fontFamily: "Bubblegum-Sans"
      },
      cardContainer: {
        flex: 0.85
      }
})
