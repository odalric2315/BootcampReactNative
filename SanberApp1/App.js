import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Index from './Tugas/Quiz-3/Index';
// import Login from './Tugas/Tugas-15/Pages/Login';
// import LoginScreen from './Tugas/Tugas-16/LoginScreen';
// import AboutScreen from './Tugas/Tugas-16/AboutScreen';
// import Telegram from './Tugas/Tugas-13/Telegram';
// import RestApi from './Tugas/Tugas-14/RestApi';

export default function App() {
  return (
    // <Telegram />
      // <LoginScreen />
      // <AboutScreen />
      // <RestApi />
      // < Login />
      < Index />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
