import {Button, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function LoginView() {
  const navigation = useNavigation();

  const gotoHome = () => {
    // console.log('go home');
    return navigation.navigate('Home');
  };

  return (
    <View style={styles.login}>
      <Button title="Home" onPress={gotoHome} />
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
