import React from 'react';
import StyleSheet from 'react-native';
import AboutTab from '../TabRoute/AboutTab';
import HomeTab from '../TabRoute/HomeTab';
import SettingTab from '../TabRoute/SettingsTab';
import {Router, Scene, Stack, Tabs} from 'react-native-router-flux';

export default function MainTabRoute() {
  return (
    <Router>
      <Stack>
        <Tabs
          key="tabBar"
          tabBarStyle={styles.tabBar}
          hideNavBar
          tabs={true}
          initial>
          <Scene
            key="homeTab"
            component={HomeTab}
            hideNavBar={true}
            title="Home"
          />
          <Scene
            key="settingTab"
            component={SettingTab}
            initial={true}
            hideNavBar={true}
            title="Setting"
            icon={SettingsIcon}
          />
          <Scene
            key="aboutTab"
            component={AboutTab}
            hideNavBar={true}
            title="About"
          />
        </Tabs>
      </Stack>
    </Router>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 50,
    borderTopColor: 'darkgrey',
    borderTopWidth: 1,
    opacity: 0.98,
    justifyContent: 'space-between',
  },
});
