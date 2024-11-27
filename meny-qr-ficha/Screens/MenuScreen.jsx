import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MenuScreen = ({ route }) => {
  const { menuData } = route.params || {}; // Verifica si `menuData` está presente

  if (!menuData) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No se encontraron datos del menú</Text>
      </View>
    );
  }

  console.log('Menú recibido:', menuData); // Depuración

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{menuData.name}</Text>
      {menuData.items.map((item, index) => (
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
