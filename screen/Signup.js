import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform, Alert } from 'react-native';

export default function Signup( {navigation} ){
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = ()=>{
        if (!firstName || !lastName || !email || !password){
            Alert.alert(`Missing Fields, Please Fill Them Out Before Submitting`)
            return;
        }
        if (!email.endsWith('@gmail.com')) {
            Alert.alert('Invalid Email', 'Please enter a valid Gmail address (e.g., yourname@gmail.com).');
            return;
        }
        console.log('Creating SUccesfull')
    };
    return (
        <View style={styles.container}>
            <View style = {styles.center}>
                <Text style={styles.h1}>Welcome to Signup Page</Text>
                <TextInput placeholder='First Name' value={firstName} onChangeText={setfirstName} style={styles.inputs}/>
                <TextInput placeholder='Last Name'value={lastName} onChangeText={setlastName} style={styles.inputs}/>
                <TextInput placeholder='Email'value={email} onChangeText={setEmail} style={styles.inputs}/>
                <TextInput placeholder='Create Password'value={password} secureTextEntry onChangeText={setPassword} style={styles.inputs}/>
            </View>
            
            
            <View style = {styles.buttonsGroup}>
                <TouchableOpacity onPress={()=>handleLogin()}style={styles.button}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
          
            <StatusBar style="auto" />
        </View>
      );
    }
    
const styles = StyleSheet.create({
    full: {
        flex: 1
    },
    center: {
        alignItems:'center',
        marginBottom: 30
    },
    container: {
    flex: 1, // Ensures the container takes up the whole screen
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff', // Optional: Set a background color
    },

    h1: {
    fontSize: 48, // Adjust the font size as needed
    fontWeight: 'bold', // Bold text
    marginBottom: 100
    },
    
    inputs:{
        width:'80%',
        padding: 10,
        marginLeft:10,
        marginRight:10,
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor:'#bc2121'
    },
    buttonsGroup: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'
      },
      button:{
        backgroundColor: '#77d8aa', // Example background color
        padding: 10,
        borderRadius: 20,
      },
      buttonText:{
        fontFamily: 'Poppins', // or any other font you want
        fontSize: 10,
        fontWeight: 'bold',
        color: '#FFFFFF', // Example text color
      }
});