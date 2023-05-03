import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import clientes from '../mocks/clientesMock'

export default function ClientesScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={clientes}
                style={styles.list}
                renderItem={({ item }) => <View style={styles.item}>
                        <Image style={styles.img} source={item.avatar} />
                        <Text style={styles.text}>CPF: {item.cpf}</Text>
                        <Text style={styles.text}>Nome: {item.nome} {item.sobrenome}</Text>
                        <Text style={styles.text}>E-mail :{item.email}</Text>
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    list: {
        width: '100%',
        paddingHorizontal: 20
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        margin: 10
    },
    img: {
        width: 100,
        height: 100,
        margin: 5,
    },
    text:{
        fontSize: 15,
        margin: 8
    }
});