import React from 'react';
import {Button, Text, View} from 'react-native';
import {firebaseTodosRef} from '../../App';

export type TodoItem = {
  id: string;
  title: string;
  body: string;
};

type TodoProps = {
  todo: TodoItem;
  onSave?: (editedTodo: TodoItem) => void;
};

export const TodoComponent: React.FC<TodoProps> = ({todo}: TodoProps) => {
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
