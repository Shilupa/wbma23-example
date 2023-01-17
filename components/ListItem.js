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
import {useFonts} from 'expo-font';

const ListItem = (props) => {
  /**
   * Getting fonts from assets/fonts folder
   */
  const [fontsLoaded] = useFonts({
    'PTSerif-BoldItalic': require('../assets/fonts/PTSerif-BoldItalic.ttf'),
    'PTSerif-Regular': require('../assets/fonts/PTSerif-Regular.ttf'),
  });

  return (
    <SafeAreaView>
      {/* // Renders until font is loaded */}
      {!fontsLoaded ? (
        <Text>Font is loading...</Text>
      ) : (
        <>
          {/* // Renders after font is loaded */}
          <TouchableOpacity style={styles.row}>
            <View style={styles.imagebox}>
              <Image
                source={{uri: props.item.thumbnails.w160}}
                style={styles.image}
              />
            </View>
            <SafeAreaView style={styles.textbox}>
              <Text style={styles.listTitle}>{props.item.title}</Text>
              <Text style={styles.text}>{props.item.description}</Text>
            </SafeAreaView>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
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
    flex: 3,
    padding: 10,
    marginLeft: 10,
  },
  listTitle: {
    fontFamily: 'PTSerif-Regular',
    color: '#A52A2A',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
    // fontFamily: 'PTSerif-Italic',
  },
  text: {
    fontFamily: 'PTSerif-BoldItalic',
  },
});

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListItem;
