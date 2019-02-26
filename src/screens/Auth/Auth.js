import React, { Component } from 'react'
import { View, Button, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import torontoBackgroundImage from '../../assets/toronto-bg.jpg';

export class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get('window').height > 500 ? "portrait" : "landscape"
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles)
  }

  updateStyles = (dims) => {
    this.setState({
      viewMode: Dimensions.get('window').height > 500 ? "portrait" : "landscape"
    })
  }
  
  loginHandler = () => {
    startMainTabs();
  }

  render() {
    let headingText = null;
    if (this.state.viewMode === 'portrait') {
      headingText = (
        < MainText >
          <HeadingText style={styles.textHeading}>Please Log In</HeadingText>
        </MainText>
      )
    }

    return (
      <ImageBackground source={torontoBackgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        {headingText}
          <Button title="Switch to Login" />

          <View style={styles.inputContainer}>
            
            <DefaultInput
              placeholder="Your Email Address"
              style={styles.input} />

            <View style={this.state.viewMode === 'portrait'
              ? styles.portraitPasswordContainer
              : styles.landscapePasswordContainer}>

              <View style={this.state.viewMode === 'portrait'
                ? styles.portraitPasswordWrapper
                : styles.landscapePasswordWrapper}>
                <DefaultInput placeholder="Password" style={styles.input} />
              </View>

              <View style={this.state.viewMode === 'portrait'
                ? styles.portraitPasswordWrapper
                : styles.landscapePasswordWrapper}>
                <DefaultInput placeholder="Confirm Password" style={styles.input} />
              </View>

            </View>

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
    maxHeight: "50%",
    margin: 20,
    top: "20%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#eee",
    opacity: 0.95
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
  },
  landscapePasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  portraitPasswordContainer: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  landscapePasswordWrapper: {
    width: "45%",
  },
  portraitPasswordWrapper: {
    width: "100%",
  }
});

export default AuthScreen;
