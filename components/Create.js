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
    event: "",
    date_time: ""
  };

  // takes us to the Feed screen **TODO** make onPress submit both event name and date/time to event table
  onPress = () => {
    this.props.navigation.navigate("Feed", { name: this.state.name });
  };

  onChangeTextEvent = event => this.setState({ event });
  onChangeTextDateTime = date_time => this.setState({ date_time });

  // this loads the list of events
  loadData = async () => {
    const url = "http://10.150.11.211:3000/v1/groups";
    const response = await fetch(url);
    const data = response.json();
    return data;
  };

  render() {
    return (
      <View>
        <Text style={styles.title}>Create event:</Text>
        <TextInput
          onChangeText={this.onChangeTextEvent}
          style={styles.nameInput}
          placeHolder="Where we droppin bois"
          value={this.state.event}
        />
        <TextInput
          onChangeText={this.onChangeTextDateTime}
          style={styles.nameInput}
          placeHolder="When and where?"
          value={this.state.date_time}
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
