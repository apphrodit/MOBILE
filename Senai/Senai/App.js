import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Categorias from './Source/Screens/Categorias'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categorias"
          component={Categorias}
          options={{ title : 'Senai'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
