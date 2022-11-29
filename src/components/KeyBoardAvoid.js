import {KeyboardAvoidingView, Text, TextInput, View} from 'react-native';
import {Colors} from '../styles/colors';

function KeyBoardAvoidScreen() {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <View style={{backgroundColor: Colors.amber, flex: 0.3}}></View>
      <View
        style={{
          justifyContent: 'space-around',
          alignContent: 'center',
          flex: 1,
        }}>
        <Text style={{margin: 20, padding: 10, fontSize: 25}}>Type here</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          placeholder="Typing...."
        />
      </View>
    </KeyboardAvoidingView>
  );
}

export default KeyBoardAvoidScreen;
