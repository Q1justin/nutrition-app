import React, {Component} from 'react';
import {  View, Text, Image, StyleSheet  } from 'react-native';

class Questions extends Component{
  render(){
    return(
      <View style = {styles.screen}>
          <Text style = {styles.title}>Questions</Text>
          <View style = {styles.questionBoard}>
            <Text>1. First Question</Text>
          </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
    screen: {
      backgroundColor: '#85DB85',
      height: 900,
      flexDirection: 'column',
    },
    title:{
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 40,
      marginTop: 40,
      marginBottom: 60
    },
    questionBoard:{
      width: 350,
      height: 350,
      marginHorizontal:30,
      elevation: 10,
      borderRadius: 10,
      backgroundColor: '#fff'
    },
    categories:{

    }
})

export default Questions;
