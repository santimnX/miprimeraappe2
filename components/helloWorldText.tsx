import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const helloWorldText = () => {
  return (
    <View>
      <Text style={styles.Text}>🔥🔥 Hola Mundo 🔥🔥</Text>
    </View>
  )
} 
const styles = StyleSheet.create(
  {
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red',
    minHeight:64,
    maxWidth:64,
    borderRadius:20,
    padding: 20,
  },
 Text:{
  color:'black',
  fontSize:20,
  fontWeight:'bold',
  borderColor: 'black', // Se usa borderColor para el color
  borderWidth: 1 
}
 }

)

export default helloWorldText