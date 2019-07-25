// Create a new event for your friends to join here

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

class Feed extends Component {
  state = {
    event: ""
  };

  // takes us to the Feed screen
  onPress = () => {
    this.props.navigation.navigate("Feed", { name: this.state.name });
  };

  onChangeText = event => this.setState({ event });

  render() {
    return (
      <View>
        <Text style={styles.title}>Create event:</Text>
        <TextInput
          onChangeText={this.onChangeText}
          style={styles.nameInput}
          placeHolder="Where we droppin bois"
          value={this.state.event}
        />
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>
            Create event and go to your Feed
          </Text>
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

export default Feed;
