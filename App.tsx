import firestore from '@react-native-firebase/firestore';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {TodoItem} from './src/common/types';
import {TodoList} from './src/pages/TodoList';

export const firebaseTodosRef = firestore().collection('todos');

export type RootStackParamList = {
  TodoList: undefined;
  TodoDetail: {todo: TodoItem};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TodoList" component={TodoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
