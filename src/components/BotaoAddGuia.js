import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BotaoAddGuia = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.buttonAddGuia}
            underlayColor="#FF9999"
            // onPress={() => handlePress('TouchableOpacity')}
            >
            <Text style={styles.addGuiaText}>+</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonAddGuia: {
        backgroundColor: '#d9d9d9',
        paddingHorizontal: 10,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'gray',
        alignSelf: 'flex-start',
        marginVertical: 0, // <- importante
        paddingVertical: 2, // opcional para ajustar altura
        paddingHorizontal: 8,
    },
    addGuiaText: {
        fontSize: 18,
        fontFamily: 'Lato-Bold',
        color: 'gray'
    },
});

export default BotaoAddGuia;
