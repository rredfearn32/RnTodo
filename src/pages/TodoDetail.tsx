import React from 'react';
import {Text} from 'react-native';

export const TodoDetail = (todo: any) => {
  return <Text>{todo.id}</Text>;
};
