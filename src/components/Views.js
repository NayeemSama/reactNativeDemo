import React from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Views() {
  return (
    <ScrollView
      style={{
        borderColor: '#000',
        borderWidth: 1,
        flexGrow: 2,
        paddingTop: 100,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 100,
      }}>
      <View
        style={{
          height: 200,
          backgroundColor: '#f5f',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Open up App.js to start working on your asd</Text>
        <StatusBar style="auto" />
      </View>

      <View
        style={{
          height: 200,
          backgroundColor: '#1ff',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Open up App.js to start working on your asd</Text>
        <StatusBar style="auto" />
      </View>

      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder="enter name"
      />

      <TouchableOpacity style={styles.button}>
        <Text>Press Here</Text>
      </TouchableOpacity>

      <View
        style={{
          backgroundColor: '#ffffff',
          alignItems: 'center',
        }}>
        <ActivityIndicator
          size="large"
          color="#00ff00"
          style={{
            height: 100,
            width: 100,
          }}
          animating={true}
        />
      </View>

      <View
        style={{
          height: 600,
          backgroundColor: '#ff6',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
          style={{
            height: 100,
            width: 100,
            toFixed: 20,
          }}
        />
      </View>

      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDd',
    padding: 10,
    borderRadius: 20,
    elevation: 2,
  },
});
