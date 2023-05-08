import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function CursosScreen({ navigation, route }) {
    const cursos = route.params.dados
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={cursos.img}></Image>
            <View style={styles.textos}>
                <Text style={styles.text}></Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    img: {
        width: '100%',
        height: '100%',
        maxHeight: 300,
    },
    textos:{
        width: '100%',
    },
    text:{
        fontSize: 16,
        margin: 5,
    }
})