import {Alert, Button, StyleSheet, Text, View} from 'react-native';

export default function LoginRoute() {
  return (
    <View style={styles.login}>
      <Text style={styles.loginText}>Login Screen</Text>
      <Button title="Alert" onPress={alertas} />
    </View>
  );
}

function alertas() {
  return Alert.alert(
    'msg',
    'body',
    [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Ask me later 2',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Ask me later 3',
        onPress: () => console.log('Ask me later pressed'),
        style: {alignItems: 'left'},
      },
    ],
    {
      cancelable: true,
      onDismiss: () => {
        console.log('dismissed');
      },
    },
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
