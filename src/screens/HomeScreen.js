import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';


import Header from '../components/Header';
import ProfileHomeScreen from '../components/ProfileHomeScreen';
import BotaoAddTask from '../components/BotaoAddTask';
import BotaoGuias from '../components/BotaoGuias';
import BotaoAddGuia from '../components/BotaoAddGuia';
import CardTask from '../components/CardTask';
import { loadTask } from '../storage/localStorage';

const HomeScreen = ({ navigation }) => {
    const [tarefas, setTarefas] = useState([]);
    const [tasksConcluidas, setTasksConcluidas] = useState([])

    useFocusEffect(
        React.useCallback(() => {
            const carregarTarefas = async () => {
                const dados = await loadTask();
                setTarefas(dados.filter(t => !t.concluida));
                setTasksConcluidas(dados.filter(t => t.concluida));
            };
            carregarTarefas();
    }, [])
    );

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <ProfileHomeScreen />
                
                <View style={styles.wrapperCategorias}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.guiasCategorias}>
                        <BotaoGuias />
                        <BotaoGuias />

                        <BotaoAddGuia/>
                    </ScrollView>
                </View>

                <View>
                    <FlatList 
                        data={tarefas}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <CardTask
                                key={item.id}
                                titulo={item.titulo}
                                data={item.data}
                                hora={item.hora}
                                nivelUrgencia={item.nivelUrgencia}
                            />
                        )}
                    />
                </View>

                <View style={styles.separator}>
                    <View style={styles.line} />
                    <Text style={styles.separatorText}>Concluídas</Text>
                    <View style={styles.line} />
                </View>

                <View>
                    <FlatList 
                        data={tasksConcluidas}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <CardTask
                                key={item.id}
                                titulo={item.titulo}
                                data={item.data}
                                hora={item.hora}
                                nivelUrgencia={item.nivelUrgencia}
                            />
                        )}
                    />
                </View>

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
