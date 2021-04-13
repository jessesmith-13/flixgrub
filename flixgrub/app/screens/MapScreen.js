import React, { useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker }  from 'react-native-maps';
import { View, Text, StyleSheet, Alert, TouchableWithoutFeedback } from 'react-native';
import { faRss, faRssSquare } from '@fortawesome/free-solid-svg-icons';
import { faStripeS } from '@fortawesome/free-brands-svg-icons';
import MapOrList from './MapOrList';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faMap, faFilter } from '@fortawesome/free-solid-svg-icons';
import colors from '../config/colors.js';
import Popup from './Popup';
import TheaterScreen from './TheaterScreen';
import mockData from './MockData';


function MapScreen(props) {
  const { displayPaymentScreen, displayMapScreen, search, liked, movies, profile } = props;
  const [displayModal, setDisplayModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(mockData[0].image);
  const [currentName, setCurrentName] = useState(mockData[0].name);
  const [currentCity, setCurrentCity] = useState(mockData[0].city);
  const [currentPositiveReviews, setCurrentPositiveReviews] = useState(mockData[0].positiveReviews);
  const [currentNumOfReviews, setCurrentNumOfReviews] = useState(mockData[0].numOfReviews);

  const toggleVisible = (bool, image=null, name=null, city=null, posReviews=null, numOfReviews=null) => {
    setIsVisible(bool);
    setCurrentImage(image);
    setCurrentName(name);
    setCurrentCity(city);
    setCurrentPositiveReviews(posReviews);
    setCurrentNumOfReviews(numOfReviews);
    x();
  };

  const x = () => {
    setTimeout(() => setDisplayModal(true), 400);
  };

  const hideDisplayModal = () => {
    setDisplayModal(false);
  };

  const displayMoreInfo = () => {
    setDisplayModal(false);
    setTimeout(() => setIsVisible(true), 400);
    // setIsVisible(true);
  };

  console.log('map screen', displayPaymentScreen)
  return (
    <View style={styles.container}>
      <TheaterScreen
        toggleVisible={toggleVisible}
        isVisible={isVisible}
        image={currentImage}
        name={currentName}
        city={currentCity}
        positiveReviews={currentPositiveReviews}
        numOfReviews={currentNumOfReviews}
        displayPaymentScreen={displayPaymentScreen}
      />
      <Popup
        displayMoreInfo={displayMoreInfo}
        displayModal={displayModal} 
        hideDisplayModal={hideDisplayModal}
      />
      <MapView
        
        style={styles.map}
        initialRegion={{
          latitude: 47.6062,
          longitude: -122.3321,
          latitudeDelta: 0.20001,
          longitudeDelta: 0.0421,
        }}
      >
        
        <Marker
          onPress={() => setDisplayModal(true)}
          coordinate={{latitude: 47.521163446413816, longitude: -122.75277407019459}}
        />
         
        <Marker 
          onPress={() => setDisplayModal(true)}
          coordinate={{latitude:  47.61904894376084, longitude: -122.33877894261681}}
        />
        <Marker
          onPress={() => setDisplayModal(true)}
          coordinate={{latitude:  48.06835847740572, longitude: -122.81724652910779}}
        />
        <Marker 
          onPress={() => setDisplayModal(true)}
          coordinate={{latitude:  47.14604269918313, longitude: -123.0930197156415}}
        />
        <Marker
          onPress={() => setDisplayModal(true)}
          coordinate={{latitude: 48.26206101337775, longitude: -122.6828665444415}}
        />

        
      </MapView>
      <View
        style={styles.mapAndFilterContainer}
      >
        <TouchableWithoutFeedback
          onPress={() => search()}
          >
          <View
            style={{flexDirection:'row', justifyContent: 'center'}}
          >
            <FontAwesomeIcon
              icon={'list'}
              color='white'
              style={{marginRight: 15}}
              size={20}
            />
            <Text style={{top: 2, color: 'white', paddingRight: 15, fontWeight: '700'}}>
              List
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={{borderLeftWidth: 0.2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 17, marginLeft: 0}}>
          <FontAwesomeIcon
            icon={faFilter}
            color='white'
            style={{marginRight: 4}}
          />
          <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 5 }}>
            Filter
          </Text>

        </View>
      </View>
      {/* <Footer search={search} liked={liked} movies={movies} profile={profile} /> */}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
      // width: '100%',
      // height: '100%',
      flex: 1,
      // alignItems: 'center'
    },
    map: {
      height:'100%',
      // alignItems: 'center'
    },
     mapAndFilterContainer: {
      flexDirection: 'row',
      position: 'absolute',
      top: '81%',
      left: '25%',
      height: '5%',
      width: '50%',
      backgroundColor: colors.blue,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center'
      // zIndex: 1000
    },
    mapAndFilter: {
      marginRight: 4
    },
});

export default MapScreen;