import {useNavigation} from '@react-navigation/native';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Colors} from '../../styles/colors';

export default function HomeView() {
  const navigation = useNavigation();

  const gotoLogin = () => {
    // console.log('go login');
    return navigation.navigate('Login');
  };

  return (
    <View style={styles.home}>
      <Button title="Login" onPress={gotoLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {},

  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  input: {
    height: 40,
    margin: 12,
    width: '100%',
    color: Colors.white,
    backgroundColor: Colors.white,
    margin: 50,
    flex: 0,
    padding: 50,
    borderWidth: 2,
    borderColor: Colors.amber,
    padding: 10,
    borderRadius: 18,
    paddingHorizontal: 20,
  },
});
