import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { TodoDetail } from './src/pages/TodoDetail';
import { TodoForm } from './src/pages/TodoForm';
import { TodoItem } from './src/common/types';
import { TodoList } from './src/pages/TodoList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';

export const firebaseTodosRef = firestore().collection('todos');

export type RootStackParamList = {
  TodoList: undefined;
  TodoDetail: { todo: TodoItem };
  TodoForm: { todo?: TodoItem };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TodoList" component={TodoList} />
        <Stack.Screen name="TodoDetail" component={TodoDetail} />
        <Stack.Screen name="TodoForm" component={TodoForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
