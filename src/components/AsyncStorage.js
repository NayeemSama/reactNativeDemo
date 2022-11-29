import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../styles/styles';

export default function AsyncScreen() {
  const [value, setValue] = useState(false);

  useEffect(() => {
    AsyncStorage.setItem('key1', 'Name');
  });

  useEffect(() => {
    console.log(value);
  }, [value]);

  async function store() {
    console.log('store ');
    await AsyncStorage.setItem('key1', 'Name');
    setValue(!value);
    console.log('store ' + (await AsyncStorage.getItem('key1')));
  }

  async function getName() {
    var i = await AsyncStorage.getItem('key1');
    return i;
  }

  return (
    <View style={styles.container}>
      <Text>Storage Screen</Text>
      <Button key="btn" title="Store" onPress={store} />
      {value && <Text>{getName}</Text>}
    </View>
  );
}
