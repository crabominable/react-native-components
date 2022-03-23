import { StatusBar } from 'expo-status-bar';

import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import Card from './components/card';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.title}>Meu App</Text>

      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 24
  }
});
