import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

// const CardTask = ({ titulo, pontos, data, hora, urgencia }) => {
const CardTask = ({ titulo, data, hora, nivelUrgencia }) => {
    const getImageByUrgencia = (nivel) => {
        switch (nivel) {
            case 'alta':
                return require('../../assets/images/niveisurgencia/altapreto.png');
            case 'media':
                return require('../../assets/images/niveisurgencia/mediapreto.png');
            case 'baixa':
                return require('../../assets/images/niveisurgencia/baixapreto.png');
            default:
                return require('../../assets/images/niveisurgencia/livrepreto.png');
        }
    };

    const getColorByUrgencia = (nivel) => {
        switch (nivel) {
            case 'alta':
                return '#e83f3f';
            case 'media':
                return '#d0f400';
            case 'baixa':
                return '#1dd014';
            default:
                return '#eaeaea';
        }
    }

    return (
        <View style={styles.viewTask}>
            <TouchableOpacity style={[styles.buttonStatusTask, {backgroundColor: getColorByUrgencia(nivelUrgencia)}]}>
                <Image
                    source={getImageByUrgencia(nivelUrgencia)}
                    style={styles.imagem}
                />
                <Text style={styles.statusText}>{nivelUrgencia.toUpperCase()}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonTask}>
                <Text style={styles.guiasText}>{titulo}</Text>
                {/* <Text style={styles.pointsText}>{pontos}</Text> */}
                <Text style={styles.dataText}>
                    {new Date(data).toLocaleDateString('pt-BR')}
                </Text>
                <Text style={styles.timeText}>
                    {new Date(hora).toLocaleTimeString('pt-BR', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false,
                    })}
                </Text>
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
    guiasText: {
        fontSize: 22,
        fontFamily: 'Lato-Regular',
        color: '#d9d9d9',
        position: 'absolute',
        top: 8,
        maxWidth: 200,
    },
    pointsText: {
        fontSize: 15,
        fontFamily: 'Lato-Regular',
        color: '#e5aa17',
        position: 'absolute',
        right: 20,
        top: 10,
    },
    dataText: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: '#d9d9d9',
        position: 'absolute',
        top: 70,
    },
    timeText: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: '#d9d9d9',
        position: 'absolute',
        right: 20,
        top: 70,
    },
});

export default CardTask;
