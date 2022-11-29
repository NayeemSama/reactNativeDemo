import {StyleSheet, Text, View} from 'react-native';

export default function Details({navigation}) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailsText}>Details Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
