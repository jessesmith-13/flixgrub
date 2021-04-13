import React from 'react';
import Footer from './Footer';
import { View, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import colors from '../config/colors.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function LikedScreen(props) {
  const { search, liked, movies, profile } = props;
  return (
    <View
      style={{flex: 1, height: '80%'}}
    >
      <ScrollView
        style={{height: '80%'}}
      >
        <View
          style={styles.topbar}
        >
          <Text
            style={styles.h1}
          >
            SEEN MOVIES
          </Text>
          <FontAwesomeIcon 
            icon={'film'}
            color='white'
            size={25}
            style={styles.filmIcon}
          />
        </View>
      </ScrollView>
      <Footer 
        search={search} 
        liked={liked} 
        movies={movies} 
        profile={profile}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    fontWeight: '600',
    // top: 20,
    // left: 20,
    // paddingTop: 50
    top: 70,
    color: 'white',
    marginLeft: 10
  },
  topbar: {
    backgroundColor: colors.logoColorBlue,
    height: 100,
  },
  filmIcon: {
    position: 'absolute',
    left: 150,
    top: 69
  }
})
export default LikedScreen;