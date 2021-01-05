import React, {Component} from 'react';
import {  View, Text, StyleSheet, TextInput, Image  } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const diary = (props) => {

  const [value, onChangeText] = React.useState("");

  return(
    <View style = {styles.diary}>
      <Text style = {{fontWeight: 'bold', fontSize: 20, marginBottom:10}}>Diary</Text>
      <View style = {styles.images}>
        <Image source={require('../../assets/running.jpg')} style = {styles.image}/>
        <Image source={require('../../assets/running.jpg')} style = {styles.image}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  diary: {
      flex: 2,
      marginHorizontal: 20,
  },
  images: {
    flex: 1,
    alignItems: 'left',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
      width: 50,
      height: 50,
      marginHorizontal: 20,
      marginVertical: 20,
  }
})

export default diary;
