import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BotaoAddTask = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate('Tarefas')}
        >
        <Image
            source={require('../../assets/images/icons8-soma-90.png')}
            style={styles.imagem}
        />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    botao: {
        position: 'absolute',
        bottom: 20,
        left: 280,
        backgroundColor: 'black',
        borderRadius: 30,
        alignItems: 'center',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        elevation: 5, // sombra no Android
        shadowColor: '#000', // sombra no iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    imagem: {
        width: 50,
        height: 50,
        resizeMode: 'contain', // ou 'cover', 'stretch', etc.
    },
});

export default BotaoAddTask;
