import { createAppContainer, createStackNavigator } from "react-navigation";

// Import the screens
import Main from "./components/Main";
import Chat from "./components/Chat";
import Feed from "./components/Feed";
// import Create from "./components/Create";

// Import React Navigator
const navigator = createStackNavigator({
  Main: { screen: Main },
  Feed: { screen: Feed },
  // Create: { screen: Create },
  Chat: { screen: Chat }
});

const AppNavContainer = createAppContainer(navigator);

// Now AppContainer is the main component for React to render

export default AppNavContainer;
