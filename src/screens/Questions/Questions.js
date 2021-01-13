import React, {Component} from 'react';
import {  View, Text, Image, StyleSheet, Button  } from 'react-native';

class Questions extends Component{
  render(){
    return(
      <View style = {styles.screen}>
        <View style = {styles.topContainer}>
          <Text style = {styles.headline}>Quests</Text>
        </View>
          <View style = {styles.questionBoard}>
            <View style = {styles.buttonContainer}>
              <Button
                title = "Daily"/>
              <Button
                title = "Long"
                color = "#841584"/>
            </View>
            <View style = {styles.questionBox}>
              <Text>Eat 2000 calories per day</Text>
            </View>
          </View>
          <View style = {styles.bottomNavBar}>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    screen: {
      backgroundColor: '#B3EEFE',
      height: 900,
      flexDirection: 'column',
    },
    topContainer:{
      height: 60,
      marginBottom: 10
    },
    headline: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 30,
      marginTop: 50,
    },
    questionBoard:{
      width: 350,
      height: 590,
      marginHorizontal:30,
      elevation: 10,
      borderRadius: 10,
      backgroundColor: '#fff',
      marginTop: 50,
      marginBottom: 30
    },
    buttonContainer: {
      flexDirection: 'row',
      height: 50,
      width: '100%'
    },
    questionBox:{
      elevation:15,
      backgroundColor: '#D3D3D3',
      width: 250,
      height: 50,
      borderRadius: 10,
      marginVertical: 70,
      marginHorizontal: 50,
      flexDirection: 'row',
      position: 'absolute',
      alignItems: 'center',
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
