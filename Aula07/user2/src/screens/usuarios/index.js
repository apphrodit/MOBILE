import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import mocks from '../../../mocks/usuarios';
import ItemList from '../../components/item';

export default function Usuarios({ navigation, route }) {
  const [listaLocal, setListaLocal] = useState(mocks);

  function abrirDetalhes(usuario, indice) {
    usuario.indice = indice;
    navigation.navigate('Detalhes', { usuario });
  }

  useEffect(() => {
    const users = listaLocal;
    if (route.params !== undefined) {
      users[Routes.params.usuario.indice] = route.params.usuario;
      setListaLocal([...users]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <FlatList
        data={listaLocal}
        style={styles.list}
        renderItem={({ item, index}) => (
          <TouchableOpacity onPress={() => abrirDetalhes(item, index)}>
            {ItemList(item)}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
