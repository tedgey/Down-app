import React, { Component } from "react";
import { GiftedChat } from "react-native-gifted-chat";

class Chat extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || "Chat!"
    // should be groups.group_name
  });

  state = {
    messages: []
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

  async componentWillMount() {
    const messages = await this.loadData();
    this.setState({
      messages
    });
  }

  loadData = async () => {
    const url = "http://10.150.41.110:3000/post/:post_id?";
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
