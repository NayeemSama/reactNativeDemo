import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';

let i = 0;

export default function ConditionRender() {
  return (
    <ScrollView>
      <View
        style={{
          height: 250,
          justifyContent: 'center',
        }}>
        <Text style={styles.titleText}>Conditional renderering</Text>
      </View>
      {users.map(item => (
        <Item1 it={item} key={item.id} />
      ))}
      <Button key={'btn1'} title="Button" onPress={fn} style={styles.button} />
    </ScrollView>
  );
}

function Item1({it}) {
  if (it.firstName === 'Dennis') {
    return null;
  }
  return (
    <View
      key={it.id}
      style={{
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text key={it.id}>
        {it.firstName} - {it.lastName}
      </Text>
    </View>
  );
}

function Item2({it}) {
  if (it.firstName === 'Dennis') {
    return null;
  } else {
    return (
      <View
        key={it.id}
        style={{
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>
          {it.firstName} - {it.lastName}
        </Text>
      </View>
    );
  }
}

function Item3({it}) {
  return it.firstName === 'Robina' ? null : (
    <View
      key={it.id}
      style={{
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>
        {it.firstName} - {it.lastName}
      </Text>
    </View>
  );
}

const fn = () => {
  const theValue = i;
  console.log(theValue);
  i++;
};

const users = [
  {id: '1', firstName: 'Robin', lastName: 'Wieruch'},
  {id: '2', firstName: 'Dennis', lastName: 'Wieruch'},
];

const styles = StyleSheet.create({
  titleText: {
    fontSize: 25,
    textAlign: 'center',
  },
  listText: {
    fontSize: 15,
    textAlign: 'center',
  },
  button: {
    padding: 20,
    borderRadius: 16,
    height: 100,
    backgroundColor: '#ff0000',
  },
});
