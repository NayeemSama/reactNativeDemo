import {StyleSheet, Text, View} from 'react-native';

export default function HomeTab() {
  return (
    <View style={styles.home}>
      <Text style={styles.homeText}>Home Tab</Text>
    </View>
  );
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
