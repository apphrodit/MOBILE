import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes'
import Alterar from './src/screens/alterar';

const Stack = createNativeStackNavigator()

export default function App() {
  return (<NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Routes"
        component={Routes}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="Alterar"
        component={Alterar}
        options={{ headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>);
}