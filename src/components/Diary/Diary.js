import React, {Component} from 'react';
import {  View, Text, StyleSheet, TextInput, Image  } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import running from '../../assets/running.jpg';

const diary = (props) => {

  const [value, onChangeText] = React.useState("");

  let itemrender = (item, index) => {
       return (
           <View style={styles.slide}>
               <Text style={styles.title}>{ item.title }</Text>
           </View>
       );
   }

  return(
    <View style = {styles.diary}>
      <Text style = {{fontWeight: 'bold', fontSize: 20, marginBottom:10}}>Diary</Text>
      <View style = {styles.images}>
      <Carousel
          ref={(c) => { this._carousel = c; }}
          data={running}
          renderItem={itemrender}
          sliderWidth={200}
          itemWidth={200}
        />
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
