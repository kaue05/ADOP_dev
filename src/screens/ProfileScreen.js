import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Header title="Perfil do Usuário" />
            <Text style={styles.text}>Esta é a tela de perfil.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    text: { fontSize: 18 },
});

export default ProfileScreen;
