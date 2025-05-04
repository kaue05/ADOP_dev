import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CardTask = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.viewTask}>
            <TouchableOpacity
                style={styles.buttonStatusTask}
                underlayColor="#FF9999"
                // onPress={() => handlePress('TouchableOpacity')}
            >
                <Image
                    source={require('../../assets/images/niveisurgencia/mediapreto.png')}
                    style={styles.imagem}
                />
                <Text style={styles.statusText}>MÉDIA</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonTask}
                underlayColor="#FF9999"
                // onPress={() => handlePress('TouchableOpacity')}
                >
                <Text style={styles.guiasText}>Todas</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    viewTask: {
        width: "85%",
        marginHorizontal: 'auto',
        marginVertical: 5,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: 'Lato-Black'
    },
    buttonStatusTask: {
        width: 70,
        height: 100,
        backgroundColor: "#e7f300",
        paddingHorizontal: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderRightWidth: 2,
        alignSelf: 'flex-start',
        marginVertical: 0, // <- importante
        paddingVertical: 2, // opcional para ajustar altura
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagem: {
        width: 50,
        height: 50,
        resizeMode: 'contain', // ou 'cover', 'stretch', etc.
    },
    statusText: {
        fontSize: 14,
        fontFamily: 'Lato-Black',
    },
    buttonTask: {
        width: 249,
        height: 100,
        backgroundColor: '#777777',
        paddingHorizontal: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignSelf: 'flex-start',
        marginVertical: 0, // <- importante
        paddingVertical: 2, // opcional para ajustar altura
    },
});

export default CardTask;
