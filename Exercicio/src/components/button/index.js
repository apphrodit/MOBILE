import {TouchableOpacity, Text} from 'react-native';

import styles from './style';

export default function ButtonCadastrar(){
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Calcular</Text>
        </TouchableOpacity>
    );
}

