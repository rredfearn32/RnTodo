import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, ScrollView, View} from 'react-native';
import {firebaseTodosRef} from '../../App';
import {TodoItem} from '../common/types';
import {TodoListItem} from '../components/TodoListItem';

export const TodoList = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return firebaseTodosRef.onSnapshot(querySnapshot => {
      const newTodos: TodoItem[] = [];
      querySnapshot.forEach(doc => {
        const {title, body} = doc.data();
        newTodos.push({id: doc.id, title, body});
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
        onPress={() => {
          firebaseTodosRef.add({
            title: `To buy`,
            body: `${Math.round(Math.random() * 100)} twiglets`,
          });
        }}
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
