import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      
      {/* Botón para navegar a la pantalla 'qrScanner' */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('qrScanner')} // Navega a 'qrScanner'
      >
        <Text style={styles.menuText}>Escanear QR</Text>
      </TouchableOpacity>

      {/* Botón para navegar a la pantalla 'qr' */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('qr')} // Navega a 'qr' (Generar QR)
      >
        <Text style={styles.menuText}>Generar QR</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  menuItem: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%', // Puedes ajustar el tamaño de los botones
  },
  menuText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center', // Centra el texto dentro del botón
  },
});

export default Home;
