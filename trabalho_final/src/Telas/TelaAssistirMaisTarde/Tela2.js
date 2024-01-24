import React, {useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const Tela2 = ({ videosCurtidos }) => {
  useEffect(() => {}, [videosCurtidos]);


  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.header}>
        <Text style={estilos.logo}>YouTube</Text>
        <TouchableOpacity style={estilos.searchBar}>
          <Text style={estilos.searchText}>Pesquisar...</Text>
        </TouchableOpacity>
      </View>
      <Text style={estilos.titulo}>
        <MaterialIcons name="favorite" size={24} color="#FF0000" /> Vídeos Curtidos
      </Text>
      <FlatList
        data={videosCurtidos}
        renderItem={({ item }) => (
          <View style={estilos.videoContainer}>
            <Image source={item.thumbnail} style={estilos.thumbnail} resizeMode="contain" />
            <View style={estilos.info}>
              <Text style={estilos.tituloVideo}>{item.title}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
      },
      header: {
        backgroundColor: '#FF0000',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
        paddingHorizontal: 20,
        paddingBottom: 10, 
      },
      logo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
      },
      searchBar: {
        backgroundColor: '#eee',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
      },
      searchText: {
        color: '#888',
      },
      titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 15,
        marginHorizontal: 20,
      },
      videoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 10,
        paddingHorizontal: 20,
      },
      thumbnail: {
        width: 120,
        height: 80,
        marginRight: 20,
      },
      info: {
        flex: 1,
      },
      tituloVideo: {
        fontSize: 20,
        marginBottom: 8,
      },
      botaoCurtir: {
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 5,
      },
      textoCurtir: {
        fontWeight: 'bold',
      },
});

export default Tela2;

