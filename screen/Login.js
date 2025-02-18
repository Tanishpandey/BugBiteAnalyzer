import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Login Page</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the whole screen // Centers the content vertically
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'space-evenly',
    backgroundColor: '#fff', // Optional: Set a background color
  },
  text: {
    fontSize: 20, // Adjust the font size as needed
    fontWeight: 'bold', // Bold text
  },
});
