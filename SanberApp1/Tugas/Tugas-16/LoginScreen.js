import React from 'react'
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';


export default function LoginScreen() {
    return (
        <View style={styles.container}>
             <Image
                style={styles.logo}
                source={require('./asset-logo/logo.png')}
            />
            <Text style={{top: 50, alignSelf: 'center', fontSize: 30}}>Login</Text>
        <View style={styles.register}>
            <Text style={styles.text}>Username / Email</Text>
            <TextInput autoCompleteType='email' style={styles.input}/>
            <Text style={styles.text}>Password</Text>
            <TextInput autoCompleteType='password' secureTextEntry={true} style={styles.input}/>
        </View>
        <View style={{top: 120, alignSelf: 'center'}}>
            <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white', alignSelf: 'center', paddingVertical: 8, fontSize: 20}}>Masuk</Text>
            </TouchableOpacity>
            <Text style={{color: '#3EC6FF', fontSize: 18, marginTop: 20, marginBottom: 20, alignSelf: 'center'}}>atau</Text>
            <TouchableOpacity style={styles.button1}>
            <Text style={{color: 'white', alignSelf: 'center', paddingVertical: 8, fontSize: 20}}>Daftar?</Text>
            </TouchableOpacity>
        </View>    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 30,
        flex: 1,
        alignSelf: "center",
        backgroundColor: 'white',
    },
    logo:{
        height: 130,
        width: 300
    },
    text: {
        margin: 10,
        marginLeft: 40
    },
    register: {
        top: 60
    },
    input: {
        top: 5, 
        padding: 10, 
        borderColor: '#003366', 
        borderWidth: 2, 
        borderRadius: 2, 
        marginRight: 40, 
        marginLeft: 40, 
        color: 'blue'
    },
    button: {
        width: 150, 
        height: 50, 
        borderRadius: 20, 
        backgroundColor: '#3EC6FF'
    },
    button1: {
        width: 150, 
        height: 50, 
        borderRadius: 20, 
        backgroundColor: '#003366'
    }
})
