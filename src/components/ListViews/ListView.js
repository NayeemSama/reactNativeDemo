import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../styles/colors';
import {Images} from '../../styles/images';

const N = 10;
const ls = [];
const arr = Array.from({length: N}, (_, index) => index + 1);

export function ListView() {
  //   return arr.map(item => {
  //     return (
  //       <View>
  //         <Text>@ - {item}</Text>
  //       </View>
  //     );
  //   });

  return (
    <FlatList
      data={getlist()}
      renderItem={({item}) => {
        return (
          <View style={styles.item}>
            <TouchableOpacity
              style={styles.viewItem}
              onPress={console.log(item.key)}>
              <View>
                <Image style={styles.viewImg} source={Images.checkImg} />
              </View>
              <View style={styles.viewText}>
                <Text style={styles.itemText}>{item.key}</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      }}
      scrollEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
  viewItem: {
    backgroundColor: Colors.amber,
    padding: 20,
    margin: 10,
    borderRadius: 16,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewImg: {
    height: 50,
    width: 50,
  },
  viewText: {
    margin: 20,
  },
  itemText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

function getlist() {
  arr.map(item => {
    console.log('das');
    // ls.concat({key: 'a' + item});
    ls.push({key: 'Item No:' + item});
    // console.log('dasas ' + ls.at(item));
  });
  console.log('sad ' + ls.length);
  return ls;
}
