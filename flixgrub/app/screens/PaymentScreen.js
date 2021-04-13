import React, { useState } from 'react';
import {View, Text, TextInput, SafeAreaView, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import colors from '../config/colors.js';

function PaymentScreen({search}) {
  const [total, setTotal] = useState(0);
  const [text, setText] = useState('')
  handleChange = (e) => {
    // console.log(e)
    // setText(e)
    // console.log('total', total)
    // console.log(total + e)
    setText(e);
    if (text === '') {
      setTotal(0);
    }
    setTotal(Number(e) * 10);
  }
  return (
    <View
      style={{}}
    >
      <View
        style={styles.header}
      >
        <TouchableWithoutFeedback
          onPress={() => search()}
        >
          <View
          >
            <FontAwesomeIcon
              style={{top: 7, marginRight: 10, marginLeft: 15}}
              icon={'chevron-left'}
            />
          </View>
        </TouchableWithoutFeedback>
        <Text
          style={styles.heading1}
        >
          Buy Tickets
        </Text>
        <Text
          style={{top: 10, marginLeft: 20}}
        >
          $10 each
        </Text>
        <FontAwesomeIcon 
          icon={'ticket-alt'}
          color='white'
          size={28}
          style={{marginLeft: 90}}
        />
      </View>
      
      <View
        style={styles.container}
      >
        <Text
          style={styles.heading2}
        >
          How many vehicles?
        </Text>
        <TextInput
          onChangeText={handleChange}
          style={[styles.vehicleInput, styles.input]}
        />
        <Text
          style={{marginBottom: 20}}
        >
          Total = ${total}
        </Text>
        <Text
          style={[styles.heading2]}
        >
          Card number
        </Text>
        <TextInput
          secureTextEntry={true}
          placeholder='**** **** **** ****'
          style={[styles.input, styles.cardNumber]}
        />
        <View
          style={{flexDirection: 'row'}}
        >
          <Text
            style={[styles.heading2, styles.expiryText]}
          >
            Valid until
          </Text>
          <Text
            style={[styles.heading2, styles.cvvText]}
          >
            CVV
          </Text>

        </View>
        <View
          style={{flexDirection: 'row'}}
        >
          <TextInput
            placeholder='Month / Year'
            style={[styles.input, styles.expiry]}
          />
          <View
            style={{flex: 1 / 10}}
          >

          </View>
          <TextInput
            secureTextEntry={true}
            placeholder='***'
            style={[styles.input, styles.cvv]}
          />

        </View>
        <Text
          style={[styles.heading2, styles.cardholder]}
        >
          Card holder
        </Text>
        <TextInput
          placeholder='Your name as it appears on your card'
          style={styles.input}
        />
        <View
          style={styles.button}
        >
          <Text
            style={styles.buttonText}
          >Buy</Text>
        </View>
      </View>
      {/* </TextInput> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20
  },
  header: {
    borderBottomWidth: 0.25,
    marginBottom: 30,
    flexDirection: 'row',
    backgroundColor: colors.logoColorRed,
    paddingTop: 50
  },
  heading1: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingBottom: 10,
    
  },
  heading2: {
    fontWeight: 'bold',
    marginBottom: 10
  },
  vehicleInput: {
    width: '10%'
  },
  input: {
    borderWidth: 0.25,
    // width: '20%',
    height: 40,
    marginBottom: 20,
    borderRadius: 8,
    paddingLeft: 10,

  },
  cvv: {
    // width: '50%'
    flex: 1 / 2
  },
  cvvText: {
    marginLeft: 120
  },
  expiry: {
    flex: 1 / 2
  },
  button: {
    backgroundColor: colors.logoColorRed,
    width: 100,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 35,
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }

})
export default PaymentScreen;