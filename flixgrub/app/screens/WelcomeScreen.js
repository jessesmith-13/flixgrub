import React, { useEffect, useState } from 'react';
import { Button, TouchableWithoutFeedback, Image, ImageBackground, StyleSheet, View, Text, TextInput, Keyboard } from 'react-native';
import colors from '../config/colors.js';
import Video from 'react-native-video';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function WelcomeScreen(props) {
  const [ didKeyboardShow, setKeyboardShow] = useState(false)
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    }
  }, []);

  const _keyboardDidShow = () => {
    setKeyboardShow(true);
  };

  const _keyboardDidHide = () => {
    setKeyboardShow(false);
  };

  const { displayMapScreen } = props;
  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
  return (
    <DismissKeyboard>
      <ImageBackground 
        style={styles.background}
        // source={require("../assets/drivein-background.png")}
        onPress={() => Keyboard.dismiss()}
      >
        {/* <Image
          style={styles.logo}
          source={require("../assets/movieLogo.jpeg")} 
        /> */}
        <Image 
          style={styles.logo}
          source={require('../assets/FlixGrubLogo.png')}
        />
        {/* <Video 
          source={{ uri: '../assets/FlixGrubLogo.mp4' }} 
          ref={(ref) => {
            this.player = ref
          }}
          onBuffer={this.onBuffer}
          onError={this.videoError}  
        /> */}
          <View
            style={styles.button}
          >
            <FontAwesomeIcon 
              icon={'user'}
              style={styles.icon}
              size={20}
            />
            {/* <AntDesign 
              name="user" 
              size={20} 
              color="black" 
              style={styles.icon}
            /> */}
            <TextInput
              placeholder='USERNAME'
              style={styles.textInput}
            />
          </View>
        <View
          style={styles.button}
          >
          <FontAwesomeIcon 
            icon={'lock'}
            size={20}
            style={styles.icon}
          />
          <TextInput
            keyboardType='default'
            secureTextEntry={true}
            placeholder='PASSWORD'
            style={styles.textInput}
            onSubmitEditing={Keyboard.dismiss}
            />
        </View>
        <View
          style={styles.input}
          >
          <Text 
            style={styles.buttonText}
            >
            LOGIN
          </Text>
        </View>
        <View style={styles.or}>
          <View style={styles.line}></View>
          <Text
            style={styles.orText}
          >
            OR
          </Text>
          <View style={styles.line}></View>
        </View>
        <TouchableWithoutFeedback
          onPress={() => props.login()}
        >
          <View
            style={styles.input}
            >
            <Text 
              style={styles.buttonText}
              >
              CONTINUE AS GUEST
            </Text>

        </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  background: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.logoColorBlue
  },
  logo: {
    height: 300,
    width: 300,
    marginBottom: '5%',
  },
  button: {
    margin: '2%',
    width: '70%',
    height: '6%',
    backgroundColor: '#fff',
    borderRadius: 100,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 12,
  },
  icon: {
    position: 'absolute',
    left: '5%'
  },
  textInput: {
    // alignSelf: 'center',
    position: 'absolute',
    left: '20%',
    fontSize: 12,
    width: '100%'
  },
  input: {
    marginTop: '5%',
    width: '70%',
    height: '6%',
    backgroundColor: '#fff',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.logoColorRed
  },
  or: {
    flexDirection: 'row',
    marginTop: '10%',
    marginBottom: '3%',
    marginLeft: '10%',
    marginRight: '10%'
  },
  orText: {
    flex: 1 
  },
  line: {
    borderWidth: 0.5,
    margin: 10,
    flex: 5
  }
})
export default WelcomeScreen;