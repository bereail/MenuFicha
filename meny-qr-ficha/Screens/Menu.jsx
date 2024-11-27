import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menú Principal</Text>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('GenerateQr')} // Navegar a la pantalla para generar el QR
      >
        <Text style={styles.menuText}>Generar QR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('QrScanner')} // Navegar a la pantalla para escanear el QR
      >
        <Text style={styles.menuText}>Escanear QR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  menuItem: {
    backgroundColor: '#6a1b9a',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
  },
  menuText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default Menu;
