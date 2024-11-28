import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GenerateQrScreen from './Components/GenerateQrScreen';
import QrScannerScreen from './Screens/QrScannerScreen';
import MenuScreen from './Screens/MenuScreen';
import Menu from './Screens/Menu';
import M from './Screens/M';
import Home from './Screens/Home';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
<NavigationContainer
  linking={{
    prefixes: ['http://http://localhost:8082', 'mycustomapp://'],
    config: {
      screens: {
        home: '',       
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