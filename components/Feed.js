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
  onPressChat = () => {
    this.props.navigation.navigate("Chat", { name: this.state.group_name });
  };

  // takes us to the create screen
  onPressCreate = () => {
    this.props.navigation.navigate("Create", { name: this.state.group_name });
  };

  async componentDidMount() {
    const events = await this.loadData();
    this.setState({
      events
    });
  }

  // this loads the list of events
  loadData = async () => {
    const url = "http://10.150.11.211:3000/v1/groups";
    const response = await fetch(url);
    const data = response.json();
    return data;
  };

  render() {
    const { events } = this.state.events;
    console.log(events);
    return (
      <View>
        <Text style={styles.title}>You down for...</Text>
        <ScrollView>
          {this.state.events.map((events, index) => (
            <View key={events.group_name}>
              <Text style={styles.contentContainer} onPress={this.onPressChat}>
                {events.group_name}
              </Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.onPressCreate}>
            <Text style={styles.newEvent}>Create an event</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const offset = 24;
const styles = StyleSheet.create({
  title: {
    alignContent: "center",
    fontSize: offset,
    borderColor: "red",
    borderWidth: 2,
    justifyContent: "center"
  },
  contentContainer: {
    fontSize: offset,
    borderColor: "green",
    color: "red",
    borderWidth: 2,
    marginBottom: 6,
    marginTop: 6,
    marginLeft: 6,
    marginRight: 6,
    justifyContent: "center"
  },
  newEvent: {
    fontSize: offset,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "blue",
    borderWidth: 2
  }
  // footer: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   height: 50
  // }
});

export default Feed;
