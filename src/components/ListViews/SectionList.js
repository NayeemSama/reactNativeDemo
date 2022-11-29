import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList,
    StatusBar,
} from 'react-native';
import Colors from '../../styles/colors';

const DATA = [
  {
    title: 'Section one',
    data: ['Section one item 1', 'Section one item 2', 'Section one item 3'],
  },
  {
    title: 'Section two',
    data: ['Section two item 1', 'Section two item 2', 'Section two item 3'],
  },
  {
    title: 'Section three',
    data: [
      'Section three item 1',
      'Section three item 2',
      'Section three item 3',
    ],
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

function SectionListScreen() {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => <Item title={item} />}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: Colors("gray"),
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default SectionListScreen;
