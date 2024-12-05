import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GenerateQrScreen from './Components/GenerateQrScreen';
import {QrScannerScreen} from './Screens/QrScannerScreen'; // Adjusted import
import Home from './Screens/Home';
import M from './Screens/M'; // Assuming this is correct

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer
      linking={{
        prefixes: ['http://localhost:8083', 'mycustomapp://'], // Fixed prefix
        config: {
          screens: {
            home: '',       // Adjust path if necessary
            menu: 'menu', 
            qr: 'qr',
            qrScanner: 'qrScanner'  
          },
        },
      }}
    >
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="menu" component={M} />
        <Stack.Screen name="qr" component={GenerateQrScreen} />
        <Stack.Screen name="qrScanner" component={QrScannerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*  <Stack.Screen name="QrScannerScreen" component={QrScannerScreen} />
  <Stack.Screen name="GenerateQr" component={GenerateQrScreen} />
  <Stack.Screen name="qr" component={GenerateQrScreen} /> */