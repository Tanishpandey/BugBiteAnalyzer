  import React from 'react';
  import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';

  export default function Landing({navigation}) {
    return (
      
      <View style={styles.container}>
        <Text style={styles.h1}>Bug-Bite Analyzer</Text>

        <View style={styles.buttonsGroup}>
          <TouchableOpacity onPress={()=> navigation.navigate('Login')} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Signup')} style={styles.button}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly'
    },
    h1: {
      fontFamily: 'Poppins',
      fontSize: '48',
      fontWeight: 'bold',
      marginTop:'50'
    },
    buttonsGroup: {
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      width:'50%'
    },
    button:{
      backgroundColor: '#77d8aa', // Example background color
      padding: 10,
      borderRadius: 10,
    },
    buttonText:{
      fontFamily: 'Poppins', // or any other font you want
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFFFFF', // Example text color
    }
  });
