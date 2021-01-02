import React, {Component} from 'react';
import {  View, Text, StyleSheet, TextInput, Image  } from 'react-native';
import { SwipeItem, SwipeButtonsContainer } from 'react-native-swipe-item';

const diary = (props) => {
  const [value, onChangeText] = React.useState("");

  return(
    <View style = {styles.diary}>
      <Text style = {{fontWeight: 'bold', fontSize: 20, marginBottom:10}}>Diary</Text>
    
      <SwipeItem
        style={styles.button}
      >
      <TextInput
        label = "12/28/2020"
        style={{ height: 60 }}
        onChangeText={text => onChangeText(text)}
        value = {value}
        placeholder = {"What did you do today?"}
      />
      </SwipeItem>
      <View style = {styles.images}>
        <Image source={require('../../assets/running.jpg')} style = {styles.running}/>
        <Image source={require('../../assets/running.jpg')} style = {styles.running}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  diary: {
      flex: 1,
      marginHorizontal: 20
  },
  images: {
    flex: 1,
    alignItems: 'left',
    flexDirection: 'row',
    alignItems: 'center'

  },
  running: {
      width: 50,
      height: 50,
      marginHorizontal: 20,
      marginVertical: 20,
  },
  button: {
       width: '80%',
       height: 100,
       alignSelf: 'center',
       marginVertical: 5,
   }
})

export default diary;
