import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MenuData from '../Screens/MenuData';

const MenuScreen = ({ route }) => {
  MenuData = route.params || {}; // Verifica si `menuData` está presente

  if (!MenuData) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No se encontraron datos del menú</Text>
      </View>
    );
  }

  console.log('Menú recibido:', MenuData); // Depuración

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{MenuData.name}</Text>
      {MenuData.items.map((item, index) => (
        <Text key={index} style={styles.data}>
          - {item}
        </Text>
      ))}
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
    marginBottom: 20,
  },
  data: {
    fontSize: 16,
  },
});

export default MenuScreen;
