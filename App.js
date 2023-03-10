import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native';
import Button from './components/Button';
import OperatorButton from './components/OperatorButton';

const screen = Dimensions.get("window");
export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.screen}>
          <Text style={styles.screenText}>0</Text>
        </View>
        <View style={styles.row}>
          <OperatorButton operator="C"/>
          <OperatorButton operator="+/-"/>
          <OperatorButton operator="del"/>
          <OperatorButton operator="/"/>
        </View>
        <View style={styles.row}>
          <Button number="7"/>
          <Button number="8"/>
          <Button number="9"/>
          <OperatorButton operator="x"/>
        </View>
        <View style={styles.row}>
          <Button number="4"/>
          <Button number="5"/>
          <Button number="6"/>
          <OperatorButton operator="-"/>
        </View>
        <View style={styles.row}>
          <Button number="1"/>
          <Button number="2"/>
          <Button number="3"/>
          <OperatorButton operator="+"/>
        </View>
        <View style={styles.row}>
          <Button number="%"/>
          <Button number="0"/>
          <Button number="."/>
          <OperatorButton operator="="/>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  screen:{
    width:  screen.width,
    height: screen.width / 1.2,
    backgroundColor: '#333333',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 20,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  screenText:{
    fontSize: 80,
    color: '#fff',
  },
  row:{
    marginTop: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});
