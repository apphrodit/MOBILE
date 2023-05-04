import React from 'react';
import categorias from '../Mocks/Categorias';
import ItemLista from '../components/ItemLista'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

export default function CategoriasScreen({ navigation }) {
    
    const abrirCursos = (dados) => {
        navigation.navigate('Detalhes', { dados })
    }

    return(
        <View>
            <FlatList
                data={categorias}
                style={styles.list}
                renderItem={({ item }) => <TouchableOpacity style={styles.item} onPress={() => abrirCursos(item)}>
                    <ItemLista item={item}/>
                </TouchableOpacity>}
            />
        </View>
    )
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
        flexDirection: 'row'
    }
});