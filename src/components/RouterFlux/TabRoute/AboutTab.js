import {StyleSheet, Text, View} from 'react-native';

export default function AboutTab() {
  return (
    <View style={styles.about}>
      <Text style={styles.aboutText}>About Tab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  about: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
