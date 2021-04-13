import React from 'react';
import Footer from './Footer';
import { View, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function LikedScreen(props) {
  const { search, liked, movies, profile } = props;
  return (
    <SafeAreaView
      style={{flex: 1, height: '100%'}}
    >
      <ScrollView>
        <Text
          style={styles.mainHeading}
        >
          Your Favorite Theatres
        </Text>
      </ScrollView>
      <Footer 
        search={search} 
        liked={liked} 
        movies={movies} 
        profile={profile}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: 20,
    fontWeight: '600',
    top: 20,
    left: 20
  }
})
export default LikedScreen;