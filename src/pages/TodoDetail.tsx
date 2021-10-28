import { Text, View } from 'react-native';

import React from 'react';
import { TodoItem } from '../common/types';

export const TodoDetail = (nav: { route: { params: { todo: TodoItem } } }) => {
  const todo: any = nav.route.params.todo;
  return (
    <View>
      <Text>{todo.title}</Text>
      <Text>{todo.body}</Text>
    </View>
  );
};
