import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { todoProps } from '../../../App';

interface TodoEditrops {
  todo: todoProps;
  onSave:(newText:string)=>void
  onCancel:()=>void
}
const TodoEdit:React.FC<TodoEditrops> = ({todo,onSave,onCancel}) => {
    const [text,setText] = useState<any>(todo?.text)
    const handleSave = () => {
        if(text.trim()){
            onSave(text.trim())
        }
    }
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={setText} value={text}/>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelBtn} onPress={onCancel}>
          <Text style={styles.btnText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  btnContainer: {
    flexDirection: 'row',
  },
  saveBtn: {
    backgroundColor: '#4cd964',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  cancelBtn: {
    backgroundColor: '#ff9500',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
  },
});
export default TodoEdit;
