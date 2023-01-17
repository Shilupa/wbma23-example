import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';

const ListItem = (props) => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.row}>
        <View style={styles.imagebox}>
          <Image
            source={{uri: props.item.thumbnails.w160}}
            style={styles.image}
          />
        </View>
        <SafeAreaView style={styles.textbox}>
          <Text style={styles.listTitle}>{props.item.title}</Text>
          <Text style={{fontFamily: 'monospace'}}>
            {props.item.description}
          </Text>
        </SafeAreaView>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#eee',
    borderRadius: 6,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  imagebox: {
    flex: 1,
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 80,
    borderRadius: 10,
  },
  textbox: {
    flex: 2,
    padding: 10,
    marginLeft: 10,
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
    fontFamily: 'PTSerif-Italic',
  },
});

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListItem;
