import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GetStarted from './src/pages/GetStarted';
import Login from './src/pages/Login';
import Registered from './src/pages/Registered';

export default function App() {
  return (
    <Registered/>
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
