import React from 'react';
import {Button, Text, View} from 'react-native';
import {firebaseTodosRef} from '../../App';
import {TodoItem} from '../common/types';

type TodoListItemProps = {
  todo: TodoItem;
  onSave?: (editedTodo: TodoItem) => void;
};

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
}: TodoListItemProps) => {
  return (
    <View style={{padding: 10}}>
      <View>
        <Text>{todo.title}</Text>
        <Text>{todo.body}</Text>
      </View>
      <Button
        title="🗑"
        onPress={() => firebaseTodosRef.doc(todo.id).delete()}
      />
    </View>
  );
};
