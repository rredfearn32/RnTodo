import { Button, SafeAreaView, ScrollView, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { RootStackParamList, firebaseTodosRef } from '../../App';

import { StackNavigationProp } from '@react-navigation/stack';
import { TodoItem } from '../common/types';
import { TodoListItem } from '../components/TodoListItem';
import { useNavigation } from '@react-navigation/core';

type todoFormScreenProp = StackNavigationProp<RootStackParamList, 'TodoForm'>;

export const TodoList = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [loading, setLoading] = useState(true);

  const formNavigation = useNavigation<todoFormScreenProp>();

  useEffect(() => {
    return firebaseTodosRef.onSnapshot((querySnapshot) => {
      const newTodos: TodoItem[] = [];
      querySnapshot.forEach((doc) => {
        const { title, body } = doc.data();
        console.log(doc.data());
        newTodos.push({ id: doc.id, title, body });
      });
      setTodos(newTodos);

      if (loading) {
        setLoading(false);
      }
    });
  }, [loading]);

  return (
    <View>
      <Button
        title={'Add Todooooo'}
        onPress={() => formNavigation.navigate('TodoForm', {})}
      />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {todos.map((todo, index) => (
            <TodoListItem key={index} todo={todo} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
