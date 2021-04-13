import React from 'react';
import Footer from './Footer'
import { StyleSheet, ScrollView, View, Image, SafeAreaView, Text, TextInput } from 'react-native'
import colors from '../config/colors';

function ProfileScreen(props) {
  const { search, liked, movies, profile } = props;
  return (
    <SafeAreaView
      style={styles.background}
    >
      <View
        style={styles.header}
      >
        <Image 
          source={require('../assets/me.jpeg')}
          style={styles.profilePhoto}
        />
        <View
          style={styles.nameAndProfileContainer}
        >
          <Text
            style={styles.name}
          >
            Jesse
          </Text>
          <Text
            style={styles.showProfile}
          >
            Show Profile
          </Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.listContainer}
      >
        <Text
          style={styles.heading}
        >
          Account Settings
        </Text>
        <View
          style={styles.listItem}
        >
          <Text
            style={styles.mainText}
          >
            Personal Information
          </Text>
        </View>
        
        <View
          style={styles.listItem}
        >
          <Text
            style={styles.mainText}
          >
            Payments
          </Text>

        </View>
        <View
          style={styles.listItem}
        >
          <Text
            style={styles.mainText}
          >
            Notifications
          </Text>
        </View>

        <Text
          style={styles.heading}
        >
          Registering
        </Text>
        <View
          style={styles.listItem}
        >
          <Text
            style={styles.mainText}
          >
            Learn about registering
          </Text>
        </View>
        <View
          style={styles.listItem}
        >
          <Text
            style={styles.mainText}
          >
            Register your drive-in
          </Text>
        </View>

        <Text
          style={styles.heading}
        >
          Support
        </Text>
        <View
          style={styles.listItem}
        >
          <Text
            style={styles.mainText}
          >
            How FlixGrub Works
          </Text>
        </View>
        <View
          style={styles.listItem}
        >
          <Text
            style={styles.mainText}
          >
            Get help
          </Text>
        </View>
        <View
          style={styles.listItem}
        >
          <Text
            style={styles.mainText}
          >
            Give us feedback
          </Text>
        </View>

        <Text
          style={styles.heading}
        >
          Legal
        </Text>
        <View
          style={styles.listItem}
        >
          <Text
            style={styles.mainText}
          >
            Terms of Service
          </Text>
        </View>

        <View
          style={styles.listItem}
        >
          <Text
            onPress={() => props.welcome()}
            style={[styles.mainText, styles.logout]}
          >
            Log out
          </Text>

        </View>
      </ScrollView>
    <Footer search={search} liked={liked} movies={movies} profile={profile}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    height: '100%'
  },
  header: {
    flexDirection: 'row',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.5
  },
  nameAndProfileContainer: {
    top: 30
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  showProfile: {
    color: colors.darkBlueGreen
  },
  profilePhoto: {
    height: 70,
    width: 70,
    borderRadius: 50,
    margin: 25
  },
  listContainer: {
    alignSelf: 'center',
    width: '85%',
    marginTop: 20
  },
  heading: {
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
    fontSize: 10,
    marginTop: 20
  },
  mainText: {
    fontSize: 20,
    color: '#202020'
  },
  listItem: {
    alignSelf: 'flex-start',
    borderBottomWidth: .2,
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20
  },
  logout: {
    marginTop: 20,
    color: colors.darkBlueGreen,
    // marginBottom: 20
  },
})

export default ProfileScreen;