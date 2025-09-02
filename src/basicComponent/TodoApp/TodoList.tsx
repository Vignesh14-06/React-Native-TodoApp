import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { todoProps } from '../../../App';
import TodoItem from './TodoItem';

interface TodoListProps {
  data: todoProps[];
  todoDelete: (id: any) => void;
  onToggleTodo: (id: any) => void;
  onEditTodo: (id: any, text: any) => void;
}
const TodoList: React.FC<TodoListProps> = ({
  data,
  todoDelete,
  onToggleTodo,
  onEditTodo,
}) => {
  return (
    <ScrollView style={styles.container}>
      {data?.map(todo => (
        <TodoItem
          key={todo?.id}
          todo={todo}
          onDelete={() => todoDelete(todo?.id)}
          todoToggle={() => onToggleTodo(todo?.id)}
          EditTodo={newItem => onEditTodo(todo?.id, newItem)}
        />
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default TodoList;
