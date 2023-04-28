import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack' 
import ScreenJuros from './components/FormJuros';
import loginform from './components/loginform';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name = "Login"
        component = {loginform}
        options={{ title: 'Bem Vindo' }} />
      <Stack.Screen
                name = "Login"
                component = {ScreenJuros}
                options={{ title: 'Tela Juros' }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}