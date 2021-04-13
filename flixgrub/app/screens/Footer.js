import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faMap, faFilter, faIceCream } from '@fortawesome/free-solid-svg-icons';


function Footer(props) {
  const { search, liked, movies, profile } = props;
  return (
    <View
      style={styles.footer}
    >
      <TouchableWithoutFeedback
          onPress={() => search()}
      >
        <View>
          <FontAwesomeIcon 
            icon={'search'}
            size={24}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => liked()}
      >
        <View>
          <FontAwesomeIcon 
            size={24}
            icon={'heart'}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => movies()}
      >
        <View>
          <FontAwesomeIcon 
            size={24}
            icon={'film'}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => profile()}
      >
        <View>
          <FontAwesomeIcon
            size={24}
            icon={'user'}
          />
        </View>
      </TouchableWithoutFeedback>

    </View>
  );
}
 const styles = StyleSheet.create({
   footer: {
    // position: 'absolute',
    // top: '90%',
    height: '8%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
 })
export default Footer;