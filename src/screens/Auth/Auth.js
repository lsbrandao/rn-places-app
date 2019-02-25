import React, { Component } from 'react'
import { View, Button, StyleSheet, ImageBackground } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import torontoBackgroundImage from '../../assets/toronto-bg.jpg';

export class AuthScreen extends Component {
  
  loginHandler = () => {
    startMainTabs();
  }

  render() {
    return (
      <ImageBackground source={torontoBackgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
          <MainText>
            <HeadingText style={styles.textHeading}>Please Log In</HeadingText>
          </MainText>
          <Button title="Switch to Login" />
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Your Email Address" style={styles.input} />
            <DefaultInput placeholder="Password" style={styles.input} />
            <DefaultInput placeholder="Confirm Password" style={styles.input} />
          </View>
          <Button title="Submit" onPress={this.loginHandler} />
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    maxHeight: "40%",
    margin: 20,
    top: "20%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#eee",
    opacity: 0.93
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  },
  inputContainer: {
    width: "80%"
  },
  textHeading: {
    fontSize: 28,
    fontWeight: "bold"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  }
});

export default AuthScreen;
