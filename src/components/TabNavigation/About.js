import {StyleSheet, Text, View} from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.about}>
      <Text style={styles.aboutText}>About Screen</Text>
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
