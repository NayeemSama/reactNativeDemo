import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Details from './Details';
import Home from './Home';

const Drawer = createDrawerNavigator();

export default function MainScreen() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        initialRouteName="Home"
        defaultStatus="open">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Details" component={Details} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
