import React, { useState } from 'react';
import { Text, ImageBackground, TextInput, View, SafeAreaView, StyleSheet, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import ScrollImage from './ScrollImage.js';
import colors from '../config/colors.js'
import mockData from './MockData.js';
import TheaterScreen from './TheaterScreen.js';
import Modal from 'react-native-modal';
import Footer from './Footer';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faMap, faFilter } from '@fortawesome/free-solid-svg-icons';
import MapOrList from './MapOrList';


function ListScreen(props) {
  const { displayPaymentScreen, displayMapScreen, search, liked, movies, profile } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentName, setCurrentName] = useState(null);
  const [currentCity, setCurrentCity] = useState(null);
  const [currentPositiveReviews, setCurrentPositiveReviews] = useState(null);
  const [currentNumOfReviews, setCurrentNumOfReviews] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [allMockData, setAllMockData] = useState(mockData);
  const [displayedMockData, setDisplayedMockData] = useState(mockData);
  // useEffect(() => {
  //   setAllMockData(mockData);
  // }, []);

  const toggleVisible = (bool, image=null, name=null, city=null, posReviews=null, numOfReviews=null) => {
    setIsVisible(bool);
    setCurrentImage(image);
    setCurrentName(name);
    setCurrentCity(city);
    setCurrentPositiveReviews(posReviews);
    setCurrentNumOfReviews(numOfReviews);
  }
  const shadowStyle={
    shadowOpacity: 0.5
  }
  const handleChange = (e) => {
    setDisplayedMockData(allMockData.filter((theatre) => theatre.name.toLowerCase().includes(e.toLowerCase())))
  }
  return (
    <SafeAreaView
    style={styles.background}
    > 
      <TheaterScreen
        displayPaymentScreen={displayPaymentScreen}
        toggleVisible={toggleVisible}
        isVisible={isVisible}
        image={currentImage}
        name={currentName}
        city={currentCity}
        positiveReviews={currentPositiveReviews}
        numOfReviews={currentNumOfReviews}
      />
      <View
        style={[
          styles.searchBar,
        ]}
        >
        {/* <AntDesign name="search1" size={20} color="black" /> */}
        <FontAwesomeIcon
          style={{marginRight: 10}}
          icon= {faSearch}
        />
        <TextInput
          onChangeText={handleChange}
          style={styles.searchBarText}
          placeholder='Search nearby drive-in theatres'
        >
        </TextInput>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
      >
        <Text
          style={{ marginBottom: 10}}
        >
          5 Nearby Drive in theatres
        </Text>
        {mockData === 'undefined' ? null : displayedMockData.map((theatre, idx) => 
          <ScrollImage 
            toggleVisible={toggleVisible}
            key={idx} 
            image={theatre.image} 
            name={theatre.name} 
            city={theatre.city}
            positiveReviews={theatre.positiveReviews}
            numOfReviews={theatre.numOfReviews}
          />
        )}
        <View
          style={{height: 50}}
        />
      </ScrollView>

      <MapOrList displayMapScreen={displayMapScreen} search={search} liked={liked} movies={movies} profile={profile}/>
      <Footer search={search} liked={liked} movies={movies} profile={profile}/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    height: '100%'
  },
  searchBar: {
    width: '90%',
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20
  },
  searchBarText: {
    width: '100%'
  },
  scroll: {
    width: '90%',
    // height: '100%',
    flex: 1,
  },
  
})

export default ListScreen;