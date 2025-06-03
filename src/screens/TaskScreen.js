import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, Button, Platform, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { saveTask, loadTask, limparTarefas } from '../storage/localStorage';

const ReportsScreen = () => {
    const [nivelUrgencia, setNivelUrgencia] = useState('alta');
    const [modalVisible, setModalVisible] = useState(false);

    const niveis = {
        alta: {
            imagem: require('../../assets/images/niveisurgencia/altavermelho.png'),
            texto: 'ALTA',
            cor: '#e64040',
        },
        media: {
            imagem: require('../../assets/images/niveisurgencia/mediaamarelo.png'),
            texto: 'MÉDIA',
            cor: '#e6f200',
        },
        baixa: {
            imagem: require('../../assets/images/niveisurgencia/baixaverde.png'),
            texto: 'BAIXA',
            cor: '#1cce15',
        },
        livre: {
            imagem: require('../../assets/images/niveisurgencia/livrecinza.png'),
            texto: 'LIVRE',
            cor: '#e8e8e8',
        },
    };

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [data, setData] = useState(new Date());
    const [mostrarData, setMostrarData] = useState(false);

    const [hora, setHora] = useState(new Date());
    const [mostrarHora, setMostrarHora] = useState(false);

    const aoSelecionarHora = (event, selectedTime) => {
        setMostrarHora(false);
        if (selectedTime) {
            setHora(selectedTime);
        }
    };

    // Função para formatar hora no estilo 24h (hh:mm)
    const formatarHora = (data) => {
        return data.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        });
    };

    const [som, setSom] = useState('padrao');
    const [categoria, setCategoria] = useState('trabalho');

    // Salvar nova Task
    const handleTask = async () => {
        const tasksExistentes = await loadTask();

        const maiorId = tasksExistentes.length > 0
        ? Math.max(...tasksExistentes.map(t => t.id))
        : 0;

        const newTask = {
            id: maiorId + 1,
            titulo,
            descricao,
            data,
            hora,
            som,
            categoria,
            nivelUrgencia,
            concluida: false,
        }

        await saveTask(newTask);

        console.log(newTask)

        setTitulo('');
        setDescricao('');
        setData(new Date());
        setHora(new Date());
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.viewImgNivel}>
                    <Image
                        source={niveis[nivelUrgencia].imagem}
                        style={styles.imgNivel}
                    />
                    <Text style={[styles.txtNivel, { color: niveis[nivelUrgencia].cor }]}>{niveis[nivelUrgencia].texto}</Text>
                </TouchableOpacity>
                <Modal
                    visible={modalVisible}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                        {Object.entries(niveis).map(([key, value]) => (
                            <TouchableOpacity
                                key={key}
                                style={styles.nivelOption}
                                onPress={() => {
                                    setNivelUrgencia(key);
                                    setModalVisible(false);
                                }}
                                >
                                <Image source={value.imagem} style={styles.imgNivelModal} />
                                <Text style={styles.txtNivel}>{value.texto}</Text>
                            </TouchableOpacity>
                        ))}
                        </View>
                    </View>
                </Modal>
                <Text style={styles.label}>Título:</Text>
                <TextInput
                    style={styles.input}
                    value={titulo}
                    onChangeText={setTitulo}
                    placeholder="Digite o título"
                />
                <Text style={styles.label}>Descrição:</Text>
                <TextInput
                    style={[styles.input, { height: 80 }]}
                    value={descricao}
                    onChangeText={setDescricao}
                    placeholder="Digite a descrição"
                    multiline
                />
                <Text style={styles.label}>Data:</Text>
                <TouchableOpacity
                    onPress={() => setMostrarData(true)}
                    style={styles.botaoDateTime}
                >
                    <Text style={styles.botaoDateTimeText}>
                        {data.toLocaleDateString('pt-BR')}
                    </Text>
                </TouchableOpacity>
                {mostrarData && (
                    <DateTimePicker
                        value={data}
                        mode="date"
                        display="default"
                        onChange={(event, selectedDate) => {
                            setMostrarData(false);
                            if (selectedDate) setData(selectedDate);
                        }}
                    />
                )}
                <Text style={styles.label}>Hora:</Text>
                <TouchableOpacity
                    onPress={() => setMostrarHora(true)}
                    style={styles.botaoDateTime}
                >
                    <Text style={styles.botaoDateTimeText}>
                        {formatarHora(hora)}
                    </Text>
                </TouchableOpacity>
                {mostrarHora && (
                    <DateTimePicker
                        value={hora}
                        mode="time"
                        is24Hour={true}
                        display="default"
                        onChange={aoSelecionarHora}
                    />
                )}
                <Text style={styles.label}>Som de Notificação:</Text>
                <Picker
                    selectedValue={som}
                    onValueChange={(itemValue) => setSom(itemValue)}
                    style={styles.pickerSelects}
                >
                    <Picker.Item label="Padrão" value="padrao" />
                    <Picker.Item label="Alarme 1" value="alarme1" />
                    <Picker.Item label="Ping" value="ping" />
                    <Picker.Item label="Silencioso" value="silencioso" />
                </Picker>
                <Text style={styles.label}>Categoria:</Text>
                <Picker
                    selectedValue={categoria}
                    onValueChange={(itemValue) => setCategoria(itemValue)}
                    style={styles.pickerSelects}
                >
                    <Picker.Item label="Trabalho" value="trabalho" />
                    <Picker.Item label="Pessoal" value="pessoal" />
                    <Picker.Item label="Estudos" value="estudos" />
                    <Picker.Item label="Outro" value="outro" />
                </Picker>
                <View style={styles.viewBotoes}>
                    <TouchableOpacity
                        style={styles.botaoSalvar}
                        onPress={() => limparTarefas()} 
                    >
                        <Text style={styles.textBotaoSalvar}>Deletar tarefas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.botaoSalvar}
                        onPress={() => handleTask()} 
                    >
                        <Text style={styles.textBotaoSalvar}>Salvar Tarefa</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'left',
        // backgroundColor: 'green',
        width: '90%',
        marginHorizontal: 'auto',
        textAlign: 'left',
    },
    viewImgNivel: {
        width: '40%',
        marginHorizontal: 'auto',
        marginVertical: 20,
        paddingTop: 10,
        paddingBottom: 5,
        alignItems: 'center',
        backgroundColor: '#b0b0b0',
        borderRadius: 20,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        padding: 20,
        width: '80%',
    },
    nivelOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    imgNivel: {
        width: 90,
        height: 90,
    },
    imgNivelModal: {
        width: 70,
        height: 70,
        marginLeft: 50,
        marginRight: 20,
    },
    txtNivel: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    label: {
        textAlign: 'left',
        fontSize: 22,
        fontFamily: 'Lato-Bold',
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    input: {
        fontSize: 20,
        backgroundColor: '#d9d9d9',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    botaoDateTime: {
        padding: 10,
        backgroundColor: '#000000',
        borderRadius: 5
    },
    botaoDateTimeText: {
        color: 'white',
        textAlign: 'center'
    },
    pickerSelects: {
        fontSize: 20,
        backgroundColor: '#d9d9d9',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    botaoSalvar: {
        backgroundColor: 'black',
        width: 150,
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        marginVertical: 20
    },
    viewBotoes: {
        alignItems: "flex-end",
    },
    textBotaoSalvar: {
        color: "white",
        fontSize: 20,
    }
});

export default ReportsScreen;
