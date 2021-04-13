import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faMap, faFilter } from '@fortawesome/free-solid-svg-icons';
import colors from '../config/colors.js'
function MapOrList(props) {
  const { displayMapScreen, search } = props;
  return (
    <View
        style={styles.mapAndFilterContainer}
      >
        <TouchableWithoutFeedback
          onPress={() => displayMapScreen()}
        >
          <View
              style={{flexDirection:'row'}}
          >
            <FontAwesomeIcon
              icon={faMap}
              color='white'
              style={{marginRight: 10}}
              size={20}
            />
            <Text style={{top: 2, color: 'white', paddingRight: 15, fontWeight: 'bold'}}>
              Map
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <View 
          style={{
            borderLeftWidth: 0.2, 
            flexDirection: 'row', 
            alignItems: 'center', 
            paddingLeft: 17, 
            marginLeft: 0
          }}>
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
  );
}
const styles = StyleSheet.create({
  mapAndFilterContainer: {
      flexDirection: 'row',
      position: 'absolute',
      top: '90%',
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

export default MapOrList;