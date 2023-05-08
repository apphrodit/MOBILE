import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cursos from './Source/Screens/CursosScreen'
import Categorias from './Source/Screens/CategoriasScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categorias"
          component={Categorias}
          options={{ title: 'Senai' }} />
        <Stack.Screen
          name="Cursos"
          component={Cursos}
          options={{ title: 'Cursos' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
