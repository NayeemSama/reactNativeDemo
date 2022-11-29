import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AboutScreen from './About';
import HomeScreen from './HomeScreen';
import SettingScreen from './Settings';

const Tab = createBottomTabNavigator();

export default function MainTab() {
  const home = 'Home';
  const settings = 'Settings';
  const about = 'About';

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={home}
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              let r = route.name;

              if (r === home) {
                iconName = focused
                  ? (iconName = 'home')
                  : (iconName = 'home-outline');
              } else if (r === settings) {
                iconName = focused
                  ? (iconName = 'settings')
                  : (iconName = 'settings-outline');
              } else if (r === about) {
                iconName = focused
                  ? (iconName = 'information-circle')
                  : (iconName = 'information-circle-outline');
              }

              return <Ionicons name={iconName} size={30} />;
            },
          })}>
          <Tab.Screen name={home} component={HomeScreen} />
          <Tab.Screen name={settings} component={SettingScreen} />
          <Tab.Screen name={about} component={AboutScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
