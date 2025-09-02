import { StyleSheet, Text, View } from 'react-native';
import TodoApp from './src/basicComponent/TodoApp/TodoApp';
import { useState } from 'react';
import TodoList from './src/basicComponent/TodoApp/TodoList';
export interface todoProps {
  id: string;
  text: string;
  completed: boolean;
}

function App() {
  const [todoList, setTodoList] = useState<todoProps[]>([]);
  const addTodo = (val: any) => {
    setTodoList([
      ...todoList,
      {
        id: Date.now().toString(),
        text: val,
        completed: false,
      },
    ]);
  };
  const todoDelete = (id: any) => {
    setTodoList(data => data.filter(todo => todo.id !== id));
  };
  const toggleTodo = (id: any) => {
    setTodoList(data =>
      data?.map(val =>
        val?.id === id ? { ...val, completed: !val.completed } : val,
      ),
    );
  };

  const editTodo = (id: any, newText: any) => {
    setTodoList(data =>
      data?.map(val => (val?.id === id ? { ...val, text: newText } : val)),
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Todo App</Text>

      <TodoApp addTodo={addTodo} />
      <TodoList
        data={todoList}
        todoDelete={todoDelete}
        onToggleTodo={toggleTodo}
        onEditTodo={editTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default App;
