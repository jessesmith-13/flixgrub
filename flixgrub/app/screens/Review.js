import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import colors from '../config/colors';

function Review(props) {
  return (
    <View
      style={styles.container}
    >
      <Text
        style={[styles.username, styles.text]}
      >moviefanatic542</Text>
      <View
        style={{flexDirection: 'row'}}
      >
        <FontAwesomeIcon 
          style={{color: colors.likedGreen }}
          icon={'thumbs-up'}
        />
        <Text
          style={[styles.review, styles.text]}
        >
          100%
        </Text>
      </View>
      <Text
        style={{marginTop: 10}}
      >
        This theater is freaking awesome! My family and I come here all the time. Great food, great service. Highly recommend!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '100%',
    borderTopWidth: 0.25,
    paddingTop: 20
  },
  username: {
    fontWeight: 'bold'
  },
  text: {
    margin: 2
  },
  review: {
    fontWeight: 'bold', 
    marginLeft: 5, 
    color: colors.likedGreen
  }
});
export default Review;