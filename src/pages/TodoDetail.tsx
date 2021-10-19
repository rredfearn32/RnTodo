import React from 'react';
import {Text} from 'react-native';
import {TodoItem} from '../common/types';

export const TodoDetail = (nav: {route: {params: {todo: TodoItem}}}) => {
  const todo: any = nav.route.params.todo;
  return <Text>{todo.body}</Text>;
};
