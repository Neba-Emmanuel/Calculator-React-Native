import React, {useReducer} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Dimensions, StatusBar} from 'react-native';
import Button from './components/Button';
import OperatorButton from './components/OperatorButton';

const screen = Dimensions.get("window");
const reducer = (state, action) => {
  switch(action.type){
    case 'number':
      return {result: state.result + action.payload};
    case 'clear':
      return {result: state.result = ''};
    case 'del':
      return {result: state.result.substring(0, state.result.length - 1)};
      // state.result == '0' ? null : {result: state.result.substring(0, state.result.length - 1)};
    case 'equalto':
      return{result: eval(state.result)}
    default:
      return state;
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, {result: ''});

  return (

    <View style={styles.container}>
      <StatusBar/>
      <SafeAreaView>
        <View style={styles.screen}>
          <Text style={styles.screenText}>{state.result == '' ? '0' : state.result}</Text>
        </View>
        <View style={styles.row}>
          <OperatorButton operator="C" onPress={() => dispatch({type: 'clear'})}/>
          <OperatorButton operator="%" onPress={() => dispatch({type: 'number', payload: '%'})}/>
          <OperatorButton operator="del" onPress={() => dispatch({type: 'del'})}/>
          <OperatorButton operator="/" onPress={() => dispatch({type: 'number', payload: '/'})}/>
        </View>
        <View style={styles.row}>
          <Button number="7" onPress={() => dispatch({type: 'number', payload: '7'})}/>
          <Button number="8" onPress={() => dispatch({type: 'number', payload: '8'})}/>
          <Button number="9" onPress={() => dispatch({type: 'number', payload: '9'})}/>
          <OperatorButton operator="x" onPress={() => dispatch({type: 'number', payload: '*'})}/>
        </View>
        <View style={styles.row}>
          <Button number="4" onPress={() => dispatch({type: 'number', payload: '4'})}/>
          <Button number="5" onPress={() => dispatch({type: 'number', payload: '5'})}/>
          <Button number="6" onPress={() => dispatch({type: 'number', payload: '6'})}/>
          <OperatorButton operator="-" onPress={() => dispatch({type: 'number', payload: '-'})}/>
        </View>
        <View style={styles.row}>
          <Button number="1" onPress={() => dispatch({type: 'number', payload: '1'})}/>
          <Button number="2" onPress={() => dispatch({type: 'number', payload: '2'})}/>
          <Button number="3" onPress={() => dispatch({type: 'number', payload: '3'})}/>
          <OperatorButton operator="+" onPress={() => dispatch({type: 'number', payload: '+'})}/>
        </View>
        <View style={styles.row}>
          <Button number="0" onPress={() => dispatch({type: 'number', payload: '0'})}/>
          <Button number="." onPress={() => dispatch({type: 'number', payload: '.'})}/>
          <Button number="00" onPress={() => dispatch({type: 'number', payload: '00'})}/>
          <OperatorButton operator="=" onPress={() => dispatch({type: 'equalto'})}/>
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
    height: screen.width / 1.3,
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
