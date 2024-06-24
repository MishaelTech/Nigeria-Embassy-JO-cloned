import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nigeria Embassy</Text>
      <Link href="/home" style={{ color: 'blue' }}>Go to Home</Link>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Poppins-Bold', // Assuming 'Poppins-Bold' is a valid font family
    fontSize: 24, // Adjust the font size to make it bigger (should be a number)
    fontWeight: 'bold', // Use 'fontWeight' for boldness, not 'fontSize'
  },


});