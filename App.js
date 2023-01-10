import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import List from './components/list';



 const App = () => {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <List/>
    </SafeAreaView>
    <StatusBar style="auto" />
    </>
    
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
