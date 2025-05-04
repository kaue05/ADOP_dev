import React from 'react';
import { ScrollView, View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Header from '../components/Header';
import BotaoAddTask from '../components/BotaoAddTask';
import BotaoGuias from '../components/BotaoGuias';
import CardTask from '../components/CardTask';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.wrapperCategorias}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.guiasCategorias}>
                        <BotaoGuias />
                        <BotaoGuias />
                        <BotaoGuias />
                        <BotaoGuias />
                        <BotaoGuias />
                        <BotaoGuias />
                        <BotaoGuias />
                    </ScrollView>
                </View>


                <CardTask />
                <CardTask />
                <CardTask />
                <CardTask />
                <CardTask />
                <CardTask />
                <CardTask />
                <CardTask />
                <CardTask />
            </ScrollView>

            <BotaoAddTask />

        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        // alignItems: 'center',
    },
    scrollContent: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    text: {
        fontSize: 18,
        marginBottom: 20
    },
    wrapperCategorias: {
        height: 45, // controla o espaço total
    },
    guiasCategorias: {
        height: 50, // ou 45, ajuste conforme desejar
        paddingHorizontal: 20,
        paddingTop: 5,
        gap: 10,
        alignItems: 'center', // para alinhar verticalmente os botões
    },
});

export default HomeScreen;
