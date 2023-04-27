import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const texto = "Calculadora de IMC";
  
  const  [peso, setPeso] = new useState(0);
  const [altura, setAltura] = new useState(0);
  const [imc, setImc] = new useState(0);
  const Calc = () =>{
     const result = (peso / ((altura / 100 ) **2)).toFixed(2);
     setImc(result);
     setAltura("");
     setPeso("");
  }
  
  const classificacao = () =>{
    if(imc > 0) {
      if(imc < 18.5){
        return "Abaixo do Peso";
      } else if (imc < 25) {
        return "Peso Normal";
      } else if (imc < 30){
        return "Sobrepeso";
      } else {
        return "Obesidade";
      }
    } else {
      return "";
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{texto}</Text>
      <TextInput style={styles.input} placeholder='Informe o seu Peso:' value ={peso} onChangeText={(val)=> setPeso(Number(val))}/>
      <TextInput style={styles.input} placeholder='Informe a sua Altura:'value ={altura} onChangeText={(val)=> setAltura(Number(val))}/> 
      <Button title='Calcular' onPress={()=>Calc()} style={styles.button}/>
      <Text style={styles.text}>IMC: {imc}</Text>
      <Text style={styles.text}>Classificação:({classificacao()})</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#264653',
    alignItems: 'center',
    justifyContent: 'center',
    gap : '4.5rem'
  },
  title : {
    color: '#E9C46A',
    fontWeight : 'bold',
    fontSize : '2.0rem' 
  },
  input : {
    width: '240px',
    borderBottomWidth: '1px',
    borderBottomColor: '#fff',
    padding: '10px',
    color: '#fff'
  },
text : {
  color: '#fff',
  fontWeight: 'Bold',
  fontSize: '1rem'
}
});
