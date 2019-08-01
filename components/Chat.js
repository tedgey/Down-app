import React, { Component } from "react";
import { GiftedChat } from "react-native-gifted-chat";

class Chat extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || "Chat!"
    // should be groups.group_name
  });

  state = {
    messages: [],
    user: ""
  };

  // get user() {
  //   // Return our name and our UID for GiftedChat to parse
  //   return {
  //     // name: this.props.navigation.state.params.name,
  //     name: this.props.navigation.state.users.name,
  //     // _id: Fire.shared.uid
  //     id: this.props.users.user_id
  //   };
  // }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello developer",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any"
          }
        }
      ]
    });
  }

  async componentDidMountUser() {
    const user = await this.loadUserData();
    this.setState({
      user
    });
  }

  loadUserData = async () => {
    const url = "http://10.150.41.110:3000/v1/the/:user_id?";
    const response = await fetch(url);
    const data = response.json();
    return data;
  };

  async componentWillMount() {
    const messages = await this.loadData();
    this.setState({
      messages
    });
  }

  loadData = async () => {
    const url = "http://10.150.41.110:3000/v1/post/:post_id?";
    const response = await fetch(url);
    const data = response.json();
    return data;
  };

  onSend(messages) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={this.user}
      />
    );
  }
}

export default Chat;
