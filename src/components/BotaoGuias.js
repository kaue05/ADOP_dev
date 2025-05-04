import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BotaoGuias = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.buttonGuias}
            underlayColor="#FF9999"
            // onPress={() => handlePress('TouchableOpacity')}
            >
            <Text style={styles.guiasText}>Todas</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonGuias: {
        backgroundColor: '#d9d9d9',
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'black',
        alignSelf: 'flex-start',
        marginVertical: 0, // <- importante
        paddingVertical: 2, // opcional para ajustar altura
    },
    guiasText: {
        fontSize: 18,
        fontFamily: 'Lato-Bold'
    },
});

export default BotaoGuias;
