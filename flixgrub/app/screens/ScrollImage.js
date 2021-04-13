import React, { useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../config/colors.js'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faSearch, faMap, faFilter, faIceCream, fas, faHeart } from '@fortawesome/free-solid-svg-icons';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Feather';

function ScrollImage(props) {
  const [liked, setLiked ] = useState(false);
  // const imageImport = import`../assets/` + props.image)
  const { image, name, city, positiveReviews, numOfReviews } = props
  return (
    <TouchableWithoutFeedback
      onPress={() => props.toggleVisible(true, image, name, city, positiveReviews, numOfReviews)}
    >
      <View
        
        style={styles.container}
      >
        <ImageBackground
          imageStyle={{borderTopLeftRadius: 6, borderTopRightRadius: 6}}
          source={props.image}
          style={styles.listImage}
        >
          {!liked ?
            <FontAwesomeIcon
              icon={'heart'}
              onPress={() => setLiked(true)}
              color='white'
              size={24}
              style={styles.addToFavorites}
            />
            // <AntDesign
            //   onPress={() => setLiked(true)}
            //   style={styles.addToFavorites}
            //   name="hearto" 
            //   size={24} 
            //   color="white" 
            // />
            :
            <Icon 
              onPress={() => setLiked(false)}
              name='heart'
              color='white'
              size={24}
              style={styles.addToFavorites}
            />
            // <AntDesign 
            //   onPress={() => setLiked(false)}
            //   style={styles.addToFavorites}
            //   name="heart" 
            //   size={24} 
            //   color="white" />
          }
        </ImageBackground>

        <View
          style={styles.imageFooter}
        >
          <View
            style={styles.nameSection}
          >
            <Text
              style={styles.name}
            >
              {props.name}
            </Text>
            <FontAwesomeIcon
              icon={'check-circle'}
              style={styles.verifiedIcon}
            />
            {/* <MaterialIcons 
              style={styles.verifiedIcon}
              name="verified"
              size={16}
              // color="blue" 
            /> */}

          </View>
          <Text
            style={styles.secondaryText}
          >
            {props.city}
          </Text>
          <View
            style={styles.reviewsAndPrice}
          >
            <FontAwesomeIcon 
              icon={'thumbs-up'}
              size={13}
              style={styles.thumbsUp}
            />
            {/* <AntDesign 
              name="like1" 
              size={13} 
              style={styles.thumbsUp}
            /> */}
            <Text
              style={styles.percentage}
            >
              {props.positiveReviews}
            </Text>
            <Text style={styles.reviews}>
              -  {props.numOfReviews} Reviews
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: '40%'
    marginBottom: 20,
    // borderRadius: 2

  },
  listImage: {
    height: 200,
    width: '100%',
    alignSelf: 'center',
  },
  addToFavorites: {
    alignSelf: 'flex-end',
    margin: 10,

  },
  imageFooter: {
    borderWidth: 0.2,
    // borderBottomWidth: 0.2,
    // borderRightWidth: 0.2,
    // borderLeftWidth: 0.2,
    padding: 10,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  }, 
  nameSection: {
    flexDirection: 'row'
  },
  name: {
    fontWeight: 'bold'
  },
  thumbsUp: {
    color: colors.likedGreen,
    marginTop: 1.5,
    marginRight: 3
  },
  percentage: {
    fontWeight: 'bold',
    color: colors.likedGreen
  },
  reviews: {
    marginLeft: 6
  },
  verifiedIcon: {
    marginLeft: 5,
    color: colors.verifiedBlue
  },
  reviewsAndPrice: {
    flexDirection: 'row',
    marginTop: 10
  },
  secondaryText: {
    color: colors.secondaryText
  }
})

export default ScrollImage;