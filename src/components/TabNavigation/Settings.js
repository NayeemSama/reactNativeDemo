import {StyleSheet, Text, View} from 'react-native';

export default function SettingScreen() {
  return (
    <View style={styles.setting}>
      <Text style={styles.settingText}>Setting Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  setting: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
