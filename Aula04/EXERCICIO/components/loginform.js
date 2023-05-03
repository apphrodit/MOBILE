import{
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import React from 'react';
import MaskInput from "react-native-mask-input";

const { width, height } = Dimensions.get('screen')

const user = {
    username: "user",
    pass: "123456"
}
export default function FormJuros({navigation}){
    
    const [username, setUsername] = React.useState('');
    const [pass, setPass] = React.useState('');

    const validaUsuario = () => {
        if(pass == user.pass && username == user.username){
            navigation.navigate("telaJuros",{ name: 'telaJuros' })
        }
    }
}