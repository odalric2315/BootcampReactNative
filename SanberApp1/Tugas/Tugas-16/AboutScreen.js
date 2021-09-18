import React from 'react'
import { View, StyleSheet, SafeAreaView, Text, Dimensions, Image, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';


export default function AboutScreen() {
    return ( 
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView style={styles.scrollView}>
                    <Text style={{top: 40, alignSelf: 'center', fontSize: 28, fontWeight: 'bold', color: '#003366'}}>
                        Tentang Saya
                    </Text>
                        <Image 
                            source={require('./asset-logo/people.png')} 
                            style={styles.logo}
                        />
                    <View style={{top: 100, alignSelf: 'center'}}>
                        <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold', color: '#003366'}}>
                            Odalric
                        </Text>
                        <Text style={{color: '#3EC6FF', fontSize: 14, marginTop: 10, marginBottom: 20, alignSelf: 'center', fontWeight: 'bold'}}>
                            React Native Developer
                        </Text>
                    </View>
                        <View style={styles.square}>
                            <Text style={{margin: 10}}>Portofolio</Text>
                            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}/>
                            <Ionicons style={{ alignSelf: 'center', paddingTop: 10, justifyContent: 'center'}} name="logo-github" size={72} color="#003366"/>
                            <Text style={{alignSelf: 'center', fontWeight: 'bold', justifyContent: 'center'}}>@Odalric2315</Text>
                        </View>
                    <View style={{margin: 10}}/>
                        <View style={styles.square}>
                            <Text style={{margin: 10}}>Hubungi Saya</Text>
                            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}/>
                            <Ionicons style={{ alignSelf: 'center', paddingTop: 20 }} name="logo-instagram" size={72} color="#3f729b"/>
                            <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>Dalic17</Text>
                        </View>
                    </ScrollView> 
            </SafeAreaView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: Constants.statusBarHeight,
    },
    text: {
        margin: 10,
        marginLeft: 40
    },
    scrollView: {
        backgroundColor: 'white',
      },
    logo:{
        borderRadius: 100, 
        width: 150, 
        height: 150, 
        top: 70, 
        marginLeft: 20, 
        marginRight: 10, 
        backgroundColor: 'lightgrey', 
        alignSelf: 'center'
    },
    square: {
        top: 100,
        height: 180,
        width: Dimensions.get('screen').width - 40,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: 'lightgrey',
    },
})
