import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GenerateQrScreen from './Components/GenerateQrScreen';
import QrScannerScreen from './Screens/QrScannerScreen';
import MenuScreen from './Screens/MenuScreen';
import Menu from './Screens/Menu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Definir la pantalla principal (Menu) */}
        <Stack.Screen name="Menu" component={Menu} />
        
        {/* Pantalla para generar el QR */}
        <Stack.Screen name="GenerateQr" component={GenerateQrScreen} />
        
        {/* Pantalla para escanear el QR */}
        <Stack.Screen name="QrScanner" component={QrScannerScreen} />
        
        {/* Pantalla del menú (cuando se escanea el QR y contiene datos) */}
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*  <Stack.Screen name="QrScannerScreen" component={QrScannerScreen} />
  <Stack.Screen name="GenerateQr" component={GenerateQrScreen} />
  <Stack.Screen name="qr" component={GenerateQrScreen} /> */