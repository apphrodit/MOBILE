import { useState } from 'react'; 
import { StyleSheet, Text, View, TextInput,Button,} from 'react-native';
import ButtonCadastrar from './src/components/button'
export default function App() {
  
  const texto = "Calculadora Para Medição de Bitola";

  const [vali, setVali] = new useState(0);
  const [valii,setValii] = new useState(0);
  const [resi,setResi] = new useState(0);
  const [resii,setResii] = new useState(0);


  const Calc = () =>{
    setResi((1.73 * vali*valii)/510.4);
    setResii((2* vali*valii)/294.64);
    setVali(0);
    setValii(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{texto}</Text>
      <TextInput style={styles.input} placeholder='Informe o Comprimento' placeholderTextColor={'#7777'} value ={vali} onChangeText={(val)=> setVali(Number(val))}/> 
      <TextInput style={styles.input} placeholder='Informe a corrente' placeholderTextColor={'#7777'} value={valii} onChangeText={(val)=> setValii(Number(val))}/>
      <Button title='Calcular'onPress={()=>Calc()} style={styles.button}/>
      <Text style={styles.texto}>Bitola De 220v:{resi}</Text>
      <Text style={styles.texto}>Bitola De 127v:{resii}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8AB2D',
    alignItems: 'center',
    justifyContent: 'center',
    gap : '2.0rem',
    color : 'white'
  },
  title : {
    color: '#000',
    fontWeight: 'bold',
    fontSize:'1.3rem'
  },
  input : {
    width: '250px',
    height: '40px',
    borderBottomWidth: '1px',
    borderBottomColor : 'white',
    backgroundColor : '#E5E5E5',
    padding: '5px',
    borderRadius: '5px',
  },
  texto : {
    color: '#000',
    fontSize: '1.8rem',
    fontWeight : 'bold'
  }
});
