// The feed is your personal list of things going down. Your posts will also appear here.

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";

class Feed extends Component {
  state = {
    events: []
  };

  // takes us to the Chat screen
  onPress = () => {
    this.props.navigation.navigate("Chat", { name: this.state.name });
  };

  async componentDidMount() {
    const events = await this.loadData();
    this.setState({
      events
    });
  }

  loadData = async () => {
    const url = "http://10.150.41.110:3000/v1/post/:post_id?";
    const response = await fetch(url);
    const data = response.json();
    return data;
  };

  render() {
    const { events } = this.state.events;
    console.log(events);
    return (
      <View>
        <Text style={styles.title}>You down?</Text>
        <ScrollView>
          <TouchableOpacity onPress={this.onPress}>
            {this.state.events.map((events, index) => (
              <View key={events.id}>
                <Text style={styles.contentContainer}>{events.texts}</Text>
              </View>
            ))}
          </TouchableOpacity>
        </ScrollView>
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
  contentContainer: {
    paddingVertical: 10
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
    borderColor: "blue",
    borderWidth: 2
  }
});

export default Feed;
