import React, {Component} from 'react';
import {  View, Text, StyleSheet  } from 'react-native';

const quest = (props) => {
  return(
    <View>
      <Text>{props.order}. {props.questDetail}</Text>
    </View>
  )
}

export default quest;
