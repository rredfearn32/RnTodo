import { Button, Text, View } from 'react-native';
import { RootStackParamList, firebaseTodosRef } from '../../App';

import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TodoItem } from '../common/types';
import { useNavigation } from '@react-navigation/core';

type TodoListItemProps = {
  todo: TodoItem;
  onSave?: (editedTodo: TodoItem) => void;
};

type todoDetailScreenProp = StackNavigationProp<
  RootStackParamList,
  'TodoDetail'
>;

type todoFormScreenProp = StackNavigationProp<RootStackParamList, 'TodoForm'>;

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
}: TodoListItemProps) => {
  const formNavigation = useNavigation<todoFormScreenProp>();
  const detailNavigation = useNavigation<todoDetailScreenProp>();
  return (
    <View style={{ padding: 10 }}>
      <View>
        <Text>{todo.title}</Text>
        <Text>{todo.body}</Text>
      </View>
      <Button
        title="👀"
        onPress={() => detailNavigation.navigate('TodoDetail', { todo })}
      />
      <Button
        title="📝"
        onPress={() => formNavigation.navigate('TodoForm', { todo })}
      />
      <Button
        title="🗑"
        onPress={() => firebaseTodosRef.doc(todo.id).delete()}
      />
    </View>
  );
};
