import React, { useState, useEffect } from 'react';
import { View, Text, Alert, Linking } from 'react-native';
import { Camera } from 'expo-camera';

const QrScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    console.log('Código QR escaneado:', data);

    if (data === 'http://localhost:8081/menu') {
      Linking.openURL(data); // Redirige a la URL escaneada
    } else {
      Alert.alert('Error', 'El QR no contiene una URL válida.');
    }
  };

  if (hasPermission === null) {
    return <Text>Solicitando permiso de cámara...</Text>;
  }

  if (hasPermission === false) {
    return <Text>Sin acceso a la cámara</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        onBarCodeScanned={handleBarCodeScanned}
      />
    </View>
  );
};

export default QrScannerScreen;
