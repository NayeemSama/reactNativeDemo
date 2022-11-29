import React, {Component} from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import AboutRoute from './AboutRoute';
import HomeRoute from './HomeRoute';
import LoginRoute from './LoginRoute';
import 'react-native-gesture-handler';

export default function MainRoute() {
  return (
    <Router>
      <Stack key="root">
        <Scene key="home" title="Home" component={HomeRoute} initial />
        <Scene key="login" title="Login" component={LoginRoute} />
        <Scene key="about" title="About" component={AboutRoute} />
      </Stack>
    </Router>
  );
}
