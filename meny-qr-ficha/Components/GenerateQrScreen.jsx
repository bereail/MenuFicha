import React from 'react';
import { View, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg'; // Asegúrate de tener esta librería instalada

const GenerateQrScreen = () => {

  return (
    <View style={styles.container}>
      <QRCode
        value="http://localhost:8082/menu" // Aquí colocas la URL a la que deseas redirigir
        size={200} // Tamaño del QR
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GenerateQrScreen;
