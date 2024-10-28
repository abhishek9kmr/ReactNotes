import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [circles, setCircles] = useState([])

  const obj= {selected: false}
  const circleClick=(index)=>{
    const updatedCircles=[...circles]
    updatedCircles[index].selected = !updatedCircles[index].selected
    setCircles(updatedCircles)
  }
  const addCircle=()=>{
   setCircles([...circles, obj])
  }
  return (
    <View>
      <Text>App</Text>
      <TouchableOpacity style={styles.btn} onPress={addCircle}>
       <Text>Button</Text>
      </TouchableOpacity>
      {circles.map((item, index)=>(<TouchableOpacity style={{...styles.circle, backgroundColor: item.selected ? 'yellow': 'pink'}}
      key={index}
      onPress={()=>circleClick(index)}
      >

      </TouchableOpacity>))}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  btn:{
    height: 40,
    width: 150,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  circle:{
    height: 100,
    width: 100,
    borderRadius: 50,
    margin:5,
    borderWidth:1
  }
})