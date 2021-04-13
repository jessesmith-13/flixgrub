import React, { useState, useRef } from 'react';
import Modal from 'react-native-modal';
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import colors from '../config/colors';
import Review from './Review';
import MapView, { Marker } from 'react-native-maps';

const TheaterScreen = (props) => {
  
  const { displayPaymentScreen, isVisible, image, name, city, positiveReviews, numOfReviews } = props;
  
  const [scrollOffSet, setScrollOffset] = useState(null)
  const [seeMore1, setSeeMore1] = useState(false);
  const [seeMore2, setSeeMore2] = useState(false);
  const [seeMore3, setSeeMore3] = useState(false)
  const scrollViewRef = useRef(null);
  const handleOnScroll = event => {
    setScrollOffset(event.nativeEvent.contentOffset.y)
  }
  const handleScrollTo = p => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo(p);
    }
  }
  // const handleScrollTo
  return (
    <View
      // style={{flex: 1}}
    >
      {/* <TouchableHighlight
        style={{height: '100%', width: '100%'}}
      > */}

        <Modal 
          // scrollTo={handleScrollTo}
          // scrollOffset={scrollOffSet}
          // scrollOffsetMax={1000}
          propogateSwipe={true}
          onSwipeComplete={() => props.toggleVisible(false)}
          swipeDirection="down"
          isVisible={isVisible}
          style={styles.modal}
          // deviceHeight={110}
          // deviceWidth={110}
        >
          <ScrollView
            // ref={scrollViewRef}
            // onScroll={handleOnScroll}
            // scrollEventThrottle={20}
            style={styles.modalContainer}
          >
            <TouchableOpacity
              activeOpacity={2}
            >

              <ImageBackground
                style={styles.modalImage}
                source={image}
              >
                <View
                  style={styles.iconContainer}
                >
                  <Text
                    style={styles.x}
                    onPress={() => props.toggleVisible(false)}
                  >
                    X
                  </Text>
                  <FontAwesomeIcon
                    icon={'heart'}
                    color='white'
                    size={24}
                  />
                  {/* <Feather 
                    style={styles.heartIcon}
                    name="heart" 
                    size={24} 
                    color="white" 
                  /> */}
                  <FontAwesomeIcon
                    icon={'external-link-alt'}
                    color='white'
                    size={24}
                    style={styles.shareIcon}
                  />
                  {/* <Entypo 
                    style={styles.shareIcon}
                    name="share-alternative" 
                    size={24} 
                    color="white" 
                  /> */}

                </View>
              </ImageBackground>

              <View
                style={styles.lowerHalfWrapper}
              >
                <Text>
                  {city}
                </Text>
                <Text
                  style={styles.header1}
                >
                  {name}
                </Text>
                <View
                  style={styles.informationHeader}
                >
                  <FontAwesomeIcon 
                    icon={'thumbs-up'}
                    size={17}
                    style={styles.thumbsUp}
                  />
                  {/* <AntDesign 
                    name="like1" 
                    size={17} 
                    style={styles.thumbsUp}
                  /> */}
                  <Text
                    style={styles.percent}
                  >
                    {positiveReviews}
                  </Text>
                  <Text>
                    Recommend
                  </Text>
                </View>
                <View>
                  <Text
                    style={styles.header2}
                    >
                    Currently Playing
                  </Text>


                  <View
                    style={styles.currentlyPlayingContainer}
                    >
                    <Image 
                      source={require('../assets/godzilla.jpeg')}
                      style={styles.movieImage}
                      />
                    <View
                      style={styles.movieTextContainer}
                    >
                      <View
                        style={{flexDirection: 'row'}}
                      >
                        <Text
                          style={styles.movieTitle}
                        >
                          Godzilla vs. Kong
                        </Text>
                      </View>
                      <Text>
                        80% Rotten Tomatoes
                      </Text>
                      
                        {seeMore1
                        ? <Text
                          style={styles.description}
                        >
                          Kong and his protectors undertake a perilous journey to find his true home. Along for the ride is Jia, an orphaned girl who has a unique and powerful bond with the mighty beast. However, they soon find themselves in the path of an enraged Godzilla as he cuts a swath of destruction across the globe. The initial confrontation between the two titans -- instigated by unseen forces -- is only the beginning of the mystery that lies deep within the core of the planet.
                          <Text
                            style={{color:'blue'}}
                            onPress={() => setSeeMore1(false)}
                          >
                            See Less
                          </Text>
                        </Text>
                        :
                        <Text
                          style={styles.description}
                        >
                          Kong and his protectors undertake a perilous journey to find his true home...
                            <Text
                                onPress={() => setSeeMore1(true)}
                                style={{color: 'blue'}}
                              >See More
                            </Text>
                          </Text>
                        }

                    </View>
                  </View>
                  
                  <View
                    style={styles.currentlyPlayingContainer}
                    >
                    <Image 
                      source={require('../assets/nobody.jpeg')}
                      style={styles.movieImage}
                      />
                    <View
                      style={styles.movieTextContainer}
                      >
                      <Text
                        style={styles.movieTitle}
                      >
                        Nobody
                      </Text>
                      <Text>
                        81% Rotten Tomatoes
                      </Text>
                      {seeMore2
                        ? <Text
                          style={styles.description}
                        >
                          Hutch Mansell fails to defend himself or his family when two thieves break into his suburban home one night. The aftermath of the incident soon strikes a match to his long-simmering rage. In a barrage of fists, gunfire and squealing tires, Hutch must now save his wife and son from a dangerous adversary -- and ensure that he will never be underestimated again.
                          <Text
                            style={{color:'blue'}}
                            onPress={() => setSeeMore2(false)}
                          >
                            See Less
                          </Text>
                        </Text>
                        :
                        <Text
                          style={styles.description}
                        >
                          Hutch Mansell fails to defend himself or his family when two thieves break into his suburban...
                            <Text
                                onPress={() => setSeeMore2(true)}
                                style={{color: 'blue'}}
                              >See More
                            </Text>
                          </Text>
                        }
                    </View>
                  </View>


                  <View
                    style={styles.currentlyPlayingContainer}
                    >
                    <Image 
                      source={require('../assets/raya.jpeg')}
                      style={styles.movieImage}
                      />
                    <View
                      style={styles.movieTextContainer}
                    >
                      <Text
                        style={styles.movieTitle}
                      >
                        Raya and the Last Dragon
                      </Text>
                      <Text>
                        94% Rotten Tomatoes
                      </Text>
                      {seeMore3
                        ? <Text
                          style={styles.description}
                        >
                          Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. However, when sinister monsters known as the Druun threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, those same monsters have returned, and it's up to a lone warrior to track down the last dragon and stop the Druun for good.
                          <Text
                            style={{color:'blue'}}
                            onPress={() => setSeeMore3(false)}
                          >
                            See Less
                          </Text>
                        </Text>
                        :
                        <Text
                          style={styles.description}
                        >
                          Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony...
                            <Text
                                onPress={() => setSeeMore3(true)}
                                style={{color: 'blue'}}
                              >See More
                            </Text>
                          </Text>
                        }
                    </View>
                    <TouchableWithoutFeedback
                      onPress={() => {
                        displayPaymentScreen()
                        props.toggleVisible()
                      }}
                    >
                      <View
                        style={styles.tickets}
                      >
                        <Text
                          style={styles.ticketsText}    
                        >
                          Buy Tickets!
                        </Text>

                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                  
                </View>
                <View
                  style={{marginTop: 50}}
                >
                  <Text
                    style={[styles.header1, styles.reviewsHeader]}
                  >
                    Reviews
                  </Text>
                  <Review />

                </View>
              </View>
            <MapView 
              style={styles.map}
              initialRegion={{
              latitude: 47.6062,
              longitude: -122.3321,
              latitudeDelta: 0.20001,
              longitudeDelta: 0.0421,
            }}
            />
            </TouchableOpacity>
          </ScrollView>
        </Modal>
      {/* </TouchableHighlight> */}
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    margin: 0,
  },
  modalContainer: {
    // height: '100%',
    // width: '100%'
  },
  modalImage: {
    // width: '100%',
    height: 400
  },
  iconContainer: {
    flexDirection: 'row',
    top: 50,
    left: 20,
    // flex: 10
    alignContent: 'center'
  },
  x: {
    // top: 40,
    // left: 20,
    color: 'white',
    fontSize: 20,
    flex: 6 / 7
    // fontWeight: 'bold'
  },
  heartIcon: {
    marginRight: 10,
    marginTop: 3
  },
  shareIcon: {
    marginLeft: 15
  },
  lowerHalfWrapper: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10
  },
  informationHeader: {
    flexDirection: 'row',
    borderBottomWidth: 0.25,
    paddingBottom: 20,
    marginBottom: 20
  },
  header1: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10
  },
  tickets: {
    // position: 'absolute',
    // left: 150,
    // bottom: 2,
    height: 30,
    top: 130,
    backgroundColor: colors.logoColorRed,
    padding: 5,
    borderRadius: 20,
    right: 220,
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ticketsText: {
    color: 'white'
  },
  header2: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  thumbsUp: {
    color: colors.likedGreen,
    marginRight: 4
  },
  percent: {
    color: colors.likedGreen,
    fontWeight: '800',
    marginRight: 4
  },
  currentlyPlayingContainer: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderWidth: 0.25,
    borderRadius: 20,
    width: '100%',
    flexDirection: 'row'
    
    // height: 100
  },
  movieImage: {
    height: 80,
    width: 80,
    marginBottom: 20,
    marginRight: 10,
    top: 10
  },
  movieTitle: {
    fontWeight: 'bold'
  },
  movieTextContainer: {
    marginTop: 6
  },
  description: {
    flex: 1,
    flexWrap: 'wrap',
    width: 240
  },
  map: {
    height: 200,
    width: '100%'
  }
})
export default TheaterScreen;