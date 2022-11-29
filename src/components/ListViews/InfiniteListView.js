import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../styles/colors';
import {Images} from '../../styles/images';

const length = 10;
const itemList = [];
const ls = Array.from({length: length}, (_, index) => index + 1);

let itemlength = 1;
let endOfList = false;
let loading = false;

export function InfiniteList() {
  return (
    <FlatList
      data={fetchMoreData()}
      //   contentContainerStyle={{flexGrow: 1}}
      renderItem={({item}) => {
        return (
          <View style={styles.item} key={item.key}>
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
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooter}
      ListEmptyComponent={renderEmpty}
      onEndReachedThreshold={0.2}
      onEndReached={fetchMoreData}
    />
  );
}

function fetchMoreData() {
  loading = true;
  if (itemList.length >= 100) {
    console.log('limit');
    endOfList = true;
    loading = false;
    return itemList;
  } else {
    for (let index = 0; index < 10; index++) {
      console.log('item added');
      itemList.push({key: 'Item No:' + itemlength});
      itemlength++;
    }
    console.log('sad ' + itemList.length);
    return itemList;
  }
  loading = false;
}

const renderHeader = () => <Text style={styles.title}>RN News</Text>;

const renderFooter = () => (
  <View style={styles.footerText}>
    {loading && <ActivityIndicator size="large" />}
    {endOfList && <Text>No more articles at the moment</Text>}
  </View>
);

const renderEmpty = () => (
  <View style={styles.emptyText}>
    <Text>No Data at the moment</Text>
    <Button title="Refresh" />
  </View>
);

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
