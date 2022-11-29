import {Button, StyleSheet, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default function HomeRoute() {
  return (
    <View style={styles.home}>
      <Text style={styles.homeText}>Home Screen</Text>
      <Button title="Go To Login" onPress={gotoLogin} />
    </View>
  );
}

function gotoLogin() {
  Actions.login();
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
