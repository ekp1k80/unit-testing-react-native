import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [squareColor, setSquareColor] = useState(false);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <View
          style={squareColor ? styles.activeSquare : styles.inactiveSquare}
          testID="square"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => setSquareColor(!squareColor)}
          activeOpacity={0.6}
          testID={'button'}>
          <Text style={styles.text}>Press Me</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    height: '10%',
    backgroundColor: 'grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  activeSquare: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
  },
  inactiveSquare: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  },
});

export default App;
