import {Button, Image, SafeAreaView, StyleSheet, Text} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import GlobalStyles from './utils/GlobalStyles';
import List from './components/List';
import Icon from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import {MainProvider} from './contexts/MainContext';

const STYLES = ['lightgreen', 'yellow', 'magenta'];

const App = () => {
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[1]);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  return (
    <MainProvider>
      <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
        <SafeAreaView style={{flex: 1}}>
          <Image source={require('./assets/cat.jpeg')} style={styles.image} />
          <Icon name="settings" style={styles.icon} />
          <Text style={styles.text}>Homeless cat </Text>
        </SafeAreaView>
        <SafeAreaView style={styles.buttonStyle}>
          <Button
            title="Change StatusBar Color"
            onPress={changeStatusBarStyle}
          />
        </SafeAreaView>
        <SafeAreaView style={{flex: 1}}>
          <List />
        </SafeAreaView>
      </SafeAreaView>
      <StatusBar style="auto" backgroundColor={statusBarStyle} />
    </MainProvider>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 60,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#E0FFFF',
  },

  image: {
    width: '90%',
    height: 300,
    margin: 20,
    borderBottomRightRadius: 80,
  },
  text: {
    fontFamily: 'PTSerif-Italic',
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'blue',
    position: 'absolute',
    bottom: -10,
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
