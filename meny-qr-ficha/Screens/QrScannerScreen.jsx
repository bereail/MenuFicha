import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Camera } from 'expo-camera';

const QrScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
    }
  };

  const toggleCameraType = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <Pressable onPress={takePicture} style={styles.button}>
            <Text style={styles.buttonText}>Take Picture</Text>
          </Pressable>
          <Pressable onPress={toggleCameraType} style={styles.button}>
            <Text style={styles.buttonText}>Flip Camera</Text>
          </Pressable>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default QrScannerScreen;


/*const QrScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    console.log('Código QR escaneado:', data);

    if (data === 'http://localhost:8082/menu') {
      Linking.openURL(data);
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
*/