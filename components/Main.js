// sign in screen that takes us to the Feed screen through the onPress function within the Main component

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

class Main extends Component {
  state = { name: "" };

  // takes us to the Feed screen
  onPress = () => {
    this.props.navigation.navigate("Feed", { name: this.state.name });
  };

  onChangeText = name => this.setState({ name });

  render() {
    return (
      <View>
        <Text style={styles.title}>Enter your name:</Text>
        <TextInput
          onChangeText={this.onChangeText}
          style={styles.nameInput}
          placeHolder="John Cena"
          value={this.state.name}
        />
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const offset = 24;
const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
    borderColor: "red",
    borderWidth: 2
  },
  nameInput: {
    marginTop: 3,
    marginBottom: 3,
    marginLeft: offset,
    fontSize: offset,
    borderColor: "green",
    borderWidth: 2
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
    borderColor: "blue",
    borderWidth: 2
  }
});

export default Main;
