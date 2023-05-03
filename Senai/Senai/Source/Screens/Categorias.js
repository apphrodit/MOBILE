import React from 'react';
import categorias from '../Mocks/Categorias';
import cursos from '../Mocks/Cursos';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

export default function CategoriasScreen({ navigation }) {
    return(
        <View>
            <FlatList
                data={categorias}
                style={styles.list}
                renderItem={({ item }) => <View style={styles.item}>

                </View>}
            
            
            
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
    }
});