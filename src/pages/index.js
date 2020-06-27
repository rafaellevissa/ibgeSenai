import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import styles from './styles';
import Logo from '../assets/logo.png';

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo} />
            </View>
            <View style={styles.body}>             
                <Text style={styles.title}>Aplicativo de Nomes do IBGE</Text> 
                <TextInput placeholder='Digite seu nome (Apenas um nome)' onChangeText={(name) => {setName(name);}} placeholderTextColor='#fff' style={styles.input} />
            </View>
        </View>
    );
}