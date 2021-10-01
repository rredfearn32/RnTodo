/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, ScrollView, View} from 'react-native';
import {TodoComponent, TodoItem} from './src/components/Todo';

export const firebaseTodosRef = firestore().collection('todos');

const App = () => {
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
            id: Math.round(Math.random() * 100),
            title: 'foo',
            body: 'bar',
          });
        }}
      />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {todos.map((todo, index) => (
            <TodoComponent key={index} todo={todo} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default App;
