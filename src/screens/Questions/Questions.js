import React, {Component} from 'react';
import {  View, Text, Image, StyleSheet  } from 'react-native';

class Questions extends Component{
  render(){
    return(
      <View style = {styles.screen}>
          <Text style = {styles.title}>Questions</Text>
          <View style = {styles.questionBoard}>
            <View style = {styles.questionBox}>
              <Text>How many Hours Do You Sleep?</Text>
            </View>
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
    categories:{

    }
})

export default Questions;
