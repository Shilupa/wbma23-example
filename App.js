import {Button, Image, SafeAreaView, StyleSheet, Text} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import GlobalStyles from './utils/GlobalStyles';
import List from './components/List';
import Icon from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import {MainProvider} from './contexts/MainContext';
import {useFonts} from 'expo-font';

const STYLES = ['purple', 'pink', 'orange', 'teal'];

const App = () => {
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [fontsLoaded] = useFonts({
    'PTSerif-BoldItalic': require('./assets/fonts/PTSerif-BoldItalic.ttf'),
  });

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
    console.log(statusBarStyle);
  };

  return (
    <MainProvider>
      <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
        {/* // Renders until font is loaded */}
        {!fontsLoaded ? (
          <Text>Font loading...</Text>
        ) : (
          <>
            {/* // Renders after font is loaded */}
            <SafeAreaView style={{flex: 1}}>
              <Image
                source={require('./assets/cat.jpeg')}
                style={styles.image}
              />
              <Icon name="settings" style={styles.icon} />
              <Text style={styles.text}>ADOPT ME 🐾 </Text>
            </SafeAreaView>
            <SafeAreaView style={styles.buttonStyle}>
              <Button
                color={'#6666FF'}
                title="Press here to change status bar color"
                onPress={changeStatusBarStyle}
              />
            </SafeAreaView>
            <SafeAreaView style={{flex: 1}}>
              <List />
            </SafeAreaView>
          </>
        )}
      </SafeAreaView>
      <StatusBar backgroundColor={statusBarStyle} style="auto" />
    </MainProvider>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },

  image: {
    width: '90%',
    height: 300,
    margin: 20,
    borderBottomRightRadius: 80,
  },
  text: {
    fontFamily: 'PTSerif-BoldItalic',
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'violet',
    position: 'absolute',
    bottom: 20,
    marginLeft: 20,
    paddingLeft: 25,
    paddingBottom: 5,
    paddingEnd: 5,
    paddingTop: 5,
  },
  icon: {
    color: 'white',
    fontSize: 40,
    position: 'absolute',
    top: 50,
    right: 45,
  },
});

export default App;
