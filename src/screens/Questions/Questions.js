import React, {Component} from 'react';
import {  View, Text, Image, StyleSheet, Button, ScrollView  } from 'react-native';

class Questions extends Component{
  render(){
    return(
      <View style = {styles.screen}>
        <View style = {styles.topContainer}>
          <Text style = {styles.headline}>Quests</Text>
        </View>
        <View style = {styles.categoryContainer}>
          <View style = {styles.categoryToggle}>
            <Text style = {styles.categoryText}>Daily</Text>
          </View>
          <View style = {styles.categoryToggle}>
            <Text style = {styles.categoryText}>Long</Text>
          </View>
        </View>
        <View style = {styles.questsContainer}>
          <ScrollView
            contentContainerStyle = {styles.scrollQuest}
            bounces = {true}
          >
            <View style = {styles.quest}>
              <Text>Quest1</Text>
            </View>
            <View style = {styles.quest}>
              <Text>Quest2</Text>
            </View>
            <View style = {styles.quest}>
              <Text>Quest3</Text>
            </View>
            <View style = {styles.quest}>
              <Text>Quest4</Text>
            </View>
            <View style = {styles.quest}>
              <Text>Quest5</Text>
            </View>
            <View style = {styles.quest}>
              <Text>Quest6</Text>
            </View>
            <View style = {styles.quest}>
              <Text>Quest7</Text>
            </View>
            <View style = {styles.quest}>
              <Text>Quest8</Text>
            </View>
            <View style = {styles.quest}>
              <Text>Quest9</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    screen: {
      height: 900,
    },
    topContainer:{
      backgroundColor: '#219DFC',
      height: 70,
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 30
    },
    headline: {
      fontWeight: 'bold',
      fontSize: 30,
      alignSelf: 'flex-end',
    },
    categoryContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: 50,
      elevation: 10
    },
    categoryToggle: {
      backgroundColor: '#219DFC',
      width: 150,
      height: 50,
      borderRadius: 10
    },
    categoryText: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      alignItems: 'center'
    },
    questsContainer: {
      height: 400
    },
    quest:{
      elevation:15,
      backgroundColor: '#F57070',
      height: 50,
      borderRadius: 10,
      marginHorizontal: 50
    },
    bottomNavBar:{
      width: 500,
      height: 60,
      elevation: 10,
      borderRadius: 10,
      backgroundColor: '#fff',
      marginTop: 20,
    },
})

export default Questions;
