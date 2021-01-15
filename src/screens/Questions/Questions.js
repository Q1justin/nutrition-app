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
            nestedScrollEnabled = {true}
          >
            <View style = {styles.quest}>
              <Text style = {styles.questText}>Eat 2000 calories</Text>
            </View>
            <View style = {styles.quest}>
              <Text style = {styles.questText}>Run 3 miles</Text>
            </View>
            <View style = {styles.quest}>
              <Text style = {styles.questText}>Sleep 8 hours</Text>
            </View>
            <View style = {styles.quest}>
              <Text style = {styles.questText}>Drink a liter of water</Text>
            </View>
            <View style = {styles.quest}>
              <Text style = {styles.questText}>Cry 500ml to release the water</Text>
            </View>
            <View style = {styles.quest}>
              <Text style = {styles.questText}>Eat 3 meals</Text>
            </View>
            <View style = {styles.quest}>
              <Text style = {styles.questText}>Stretch for 15 minutes before work</Text>
            </View>
            <View style = {styles.quest}>
              <Text style = {styles.questText}>Stretch for 15 minutes before going to bed</Text>
            </View>
            <View style = {styles.quest}>
              <Text style = {styles.questText}>Go to bed before midnight</Text>
            </View>
            <View style = {styles.quest}>
              <Text style = {styles.questText}>Eat one healthy meal per day</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    screen: {
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
      elevation: 10,
    },
    categoryToggle: {
      backgroundColor: '#219DFC',
      width: 150,
      height: 50,
      borderRadius: 10,
      elevation: 20,
    },
    categoryText: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      alignItems: 'center'
    },
    questsContainer: {
      height: "60%"
    },
    quest:{
      elevation:15,
      backgroundColor: '#F57070',
      height: 50,
      borderRadius: 10,
      marginVertical: 10,
      marginHorizontal: 30
    },
    questText:{
      flexDirection: 'column',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 15,
      justifyContent: 'center'
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
