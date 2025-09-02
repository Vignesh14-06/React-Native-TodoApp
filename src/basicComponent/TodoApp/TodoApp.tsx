import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
interface TodoAppProps{
    addTodo: (todo:string)=>void
}
//TodoApp component for adding new todos
const TodoApp:React.FC<TodoAppProps> = ({addTodo}) => {
  const [text, setText] = useState('');
  const handleTodoAdd =() => {
    if(text.trim()){
        addTodo(text.trim())
        setText('')
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new Todo"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.addTodoButton} onPress={handleTodoAdd}>
        <Text style={styles.addTodoBtnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    marginRight: 10,
  },
  addTodoButton:{
    backgroundColor:'#007aff',
    paddingVertical:5,
    paddingHorizontal:15,
    justifyContent:'center',
    alignItems:'center'
  },
  addTodoBtnText:{
    color:'#fff',
    fontWeight:'bold'
  }
});
export default TodoApp;
