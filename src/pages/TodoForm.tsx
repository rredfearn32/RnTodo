import { Button, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { RootStackParamList, firebaseTodosRef } from '../../App';

import { StackNavigationProp } from '@react-navigation/stack';
import { TodoItem } from '../common/types';
import { useNavigation } from '@react-navigation/native';

type todoListScreenProp = StackNavigationProp<RootStackParamList, 'TodoList'>;

const blankTodo = {
  id: '',
  title: '',
  body: '',
};

const todoIsValid = (todo: TodoItem | undefined): todo is TodoItem => {
  return !!todo?.title && !!todo?.body;
};

export const TodoForm = (nav: { route: { params: { todo: TodoItem } } }) => {
  const [todo, setTodo] = useState<TodoItem>({
    ...(nav?.route.params.todo || blankTodo),
  });
  const homeNavigation = useNavigation<todoListScreenProp>();

  const saveTodo = () => {
    if (todoIsValid(todo)) {
      if (todo?.id) {
        firebaseTodosRef.doc(todo.id).set(todo);
      } else {
        firebaseTodosRef.add(todo);
      }
    }
    homeNavigation.navigate('TodoList');
  };

  return (
    <View>
      <TextInput
        onChangeText={(text) => setTodo({ ...todo, title: text })}
        value={todo?.title}
      />
      <TextInput
        onChangeText={(text) => setTodo({ ...todo, body: text })}
        value={todo?.body}
      />
      <Button
        title="Save"
        onPress={saveTodo}
        disabled={!todo?.body || !todo?.title}
      />
    </View>
  );
};
