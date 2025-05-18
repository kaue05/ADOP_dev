import React from 'react';
import { ScrollView, View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Header from '../components/Header';
import ProfileHomeScreen from '../components/ProfileHomeScreen';
import BotaoAddTask from '../components/BotaoAddTask';
import BotaoGuias from '../components/BotaoGuias';
import BotaoAddGuia from '../components/BotaoAddGuia';
import CardTask from '../components/CardTask';
import tasks from '../data/tasks.json';

const HomeScreen = ({ navigation }) => {
    const pendentes = tasks.filter(task => !task.concluida);
    const concluidas = tasks.filter(task => task.concluida);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <ProfileHomeScreen />
                
                <View style={styles.wrapperCategorias}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.guiasCategorias}>
                        <BotaoGuias />
                        <BotaoGuias />
                        {/* <BotaoGuias />
                        <BotaoGuias />
                        <BotaoGuias />
                        <BotaoGuias />
                        <BotaoGuias /> */}

                        <BotaoAddGuia/>
                    </ScrollView>
                </View>


                {pendentes.map(task => (
                    <CardTask
                        key={task.id}
                        titulo={task.titulo}
                        pontos={task.pontos}
                        data={task.data}
                        hora={task.hora}
                        urgencia={task.urgencia}
                    />
                ))}

                <View style={styles.separator}>
                    <View style={styles.line} />
                    <Text style={styles.separatorText}>Concluídas</Text>
                    <View style={styles.line} />
                </View>

                {concluidas.map(task => (
                    <CardTask
                        key={task.id}
                        titulo={task.titulo}
                        pontos={task.pontos}
                        data={task.data}
                        hora={task.hora}
                        urgencia={task.urgencia}
                    />
                ))}


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
    container: { flex: 1 },
    scrollContent: { paddingBottom: 100 },
    separator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        paddingHorizontal: 10,
    },
    separatorText: {
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#888',
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
});

export default HomeScreen;
