import {StyleSheet, Text, View} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.home}>
      <Text style={styles.homeText}>Home Screen</Text>
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
