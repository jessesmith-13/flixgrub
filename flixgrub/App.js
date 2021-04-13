import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen.js';
import ListScreen from './app/screens/ListScreen.js';
import ProfileScreen from './app/screens/ProfileScreen.js';
import LikedScreen from './app/screens/LikedScreen.js';
import MoviesScreen from './app/screens/MoviesScreen.js';
import MapView, { Marker }  from 'react-native-maps';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTicketAlt, faChevronLeft, fas, faList, faInfoCircle, faDirections, faExternalLinkAlt, faLock, faFilm, faUser, faThumbsUp, faCheckCircle, faSearch, faMap, faFilter, faHeart } from '@fortawesome/free-solid-svg-icons';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Feather';
import MapScreen from './app/screens/MapScreen.js';
import PaymentScreen from './app/screens/PaymentScreen';

Icon.loadFont();
// import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, faTicketAlt, faChevronLeft, faList, faInfoCircle, faDirections, faExternalLinkAlt, faLock, faUser, faFilm, faThumbsUp, faCheckCircle, faSearch, faMap, faFilter, faHeart);

export default function App() {

  const Profile = () => {
    setDisplay(<ProfileScreen welcome={Welcome} profile={Profile} search={Search} movies={Movies} liked={Liked}/>)
  };

  const displayPaymentScreen = () => {
    setDisplay(<PaymentScreen search={Search}/>);
  };

  const displayMapScreen = () => {
    console.log(displayPaymentScreen)
    setDisplay(<MapScreen displayPaymentScreen={displayPaymentScreen} search={Search} />);
  };

  const Search = () => {
    setDisplay(<ListScreen displayPaymentScreen={displayPaymentScreen} displayMapScreen={displayMapScreen} profile={Profile} search={Search} movies={Movies} liked={Liked}/>)
  };

  const Movies = () => {
    setDisplay(<MoviesScreen profile={Profile} search={Search} movies={Movies} liked={Liked}/> )
  };

  const Liked = () => {
    setDisplay(<LikedScreen profile={Profile} search={Search} movies={Movies} liked={Liked}/>)
  };

  const Welcome = () => {
    setDisplay(<WelcomeScreen login={Login}/>)
  };
  const Login = () => {
    // console.log(displayPaymentScreen);
    setDisplay(<ListScreen displayPaymentScreen={displayPaymentScreen} displayMapScreen={displayMapScreen} profile={Profile} search={Search} movies={Movies} liked={Liked}/>)
    // console.log('logged in')
  };

  const [ display, setDisplay ] = useState(<WelcomeScreen login={Login}/>)
  return (
    display
  );
}

const styles = StyleSheet.create({
  
});
