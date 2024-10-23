import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Child from './Child';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Child/>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})