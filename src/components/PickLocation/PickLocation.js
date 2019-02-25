import React, { Component } from 'react'
import { View, Image, Button, StyleSheet, Text } from 'react-native';

import imagePlaceHolderMap from '../../assets/toronto-bg.jpg'

export class PickLocation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
        <Image source={imagePlaceHolderMap} style={styles.previewImage} />
        </View>
        <View style={styles.button}>
          <Button title="Locate me" onPress={() => alert('Pick a Location')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  },
  previewImage: {
    width: "100%",
    height: "100%"
  }
});

export default PickLocation;






