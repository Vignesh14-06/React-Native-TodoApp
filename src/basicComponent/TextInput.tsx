import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const TextInputComp = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        marginBottom:20,
        marginTop:20
    },
    input:{
        height:50,
        borderColor:'gray',
        borderWidth:1,
        paddingHorizontal:10,
        marginBottom:10
    }
})
export default TextInputComp
