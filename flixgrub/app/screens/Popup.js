import { faRssSquare } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Modal from 'react-native-modal';
import mockData from './MockData.js';
import colors from '../config/colors.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


function Popup({ displayMoreInfo, displayModal, hideDisplayModal }) {
  return (
    <View
      style={styles.container}

    >
      <Modal
        // style={styles.modal}
        isVisible={displayModal}
        hasBackdrop={true}
        onBackdropPress={() => hideDisplayModal()}
        // deviceHeight={4}
        animationIn = 'slideInLeft'
        animationOut = 'slideOutRight'
      >
        <View
          style={styles.modal}
        >
          <Image
            style={styles.image}
            source={mockData[0].image}
          />
          
          <Text
            style={[styles.heading, styles.text]}
          >
            {mockData[0].name}
          </Text>
          <Text
            style={[styles.text]}
          >
            {mockData[0].city}
          </Text>
          <View
            style={{flexDirection: 'row'}}
          >
            <FontAwesomeIcon 
              icon={'thumbs-up'}
              size={17}
              style={styles.thumbsUp}
            />
            <Text
              style={[styles.text, styles.percent]}
            >
              {mockData[0].positiveReviews}
            </Text>
          </View>
          <Text
            style={[styles.text]}
          >
            {mockData[0].numOfReviews} Reviews
          </Text>


          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <View
              style={styles.buttons}
            >
              <FontAwesomeIcon 
                icon={'directions'}
                color='white'
                style={{marginRight: 5}}
              />
              <Text
                style={styles.buttonText}
              >
                Directions
              </Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => displayMoreInfo()}
            >
              <View
                style={styles.buttons}
              >
                <FontAwesomeIcon 
                  icon={'info-circle'}
                  color='white'
                  style={{marginRight: 5}}
                />
                <Text
                  style={styles.buttonText}
                >
                  See More
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  modal: {
    height: 270,
    width: 300,
    borderRadius: 15,
    // top: 300,
    // left: 200,
    backgroundColor: 'white',
    borderWidth: 0.5,
    alignSelf: 'center',
    top: 230
    // background: 'transparent',
  },
  x: {
    fontSize: 20,
    fontWeight: 'bold',
    left: 5
  },
  image: {
    width: '99%',
    height: 100,
    margin: 2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignSelf: 'center'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 25
  },
  buttons: {
    backgroundColor: colors.logoColorRed,
    height: 40,
    width: '40%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    flexDirection: 'row'
  },
  text: {
    marginLeft: 10,
    marginBottom: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  thumbsUp: {
    color: colors.likedGreen,
    marginRight: 0,
    marginLeft: 10
  },
  percent: {
    fontWeight: '900',
    color: colors.likedGreen
  }
});

export default Popup;
