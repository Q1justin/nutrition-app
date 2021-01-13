import React, {Component} from 'react';
import {  View, Text, Image, StyleSheet  } from 'react-native';

class Questions extends Component{
  render(){
    return(
      <View style = {styles.screen}>
          <View style = {styles.topics}>

          </View>
          <View style = {styles.questionBoard}>
            <View style = {styles.questionBox}>
              <Text>How many Hours Do You Sleep?</Text>
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
    topics:{
      width: 300,
      height: 60,
      marginHorizontal:50,
      elevation: 10,
      borderRadius: 10,
      backgroundColor: '#fff',
      marginTop: 60,
      marginBottom: 10
    },
    questionBoard:{
      width: 350,
      height: 500,
      marginHorizontal:30,
      elevation: 10,
      borderRadius: 10,
      backgroundColor: '#fff',
      marginTop: 50,
      marginBottom: 60
    },
    questionBox:{
      elevation:15,
      backgroundColor: '#D3D3D3',
      width: 250,
      height: 50,
      borderRadius: 10,
      marginVertical: 15,
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
