import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CounterContext } from './App';


const Child = () => {
    const { counter, increment, decrement } = React.useContext(CounterContext);
  
    return (
      <View style={styles.container}>
        <Text style={styles.counterText}>Counter: {counter}</Text>
        <Button title="Increment" onPress={increment} />
        <Button title="Decrement" onPress={decrement} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    counterText: {
      fontSize: 30,
      marginBottom: 20,
    },
  });
  
  export default Child;