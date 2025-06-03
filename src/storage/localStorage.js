import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveTask = async (newTask) => {
    try {
        const jsonAtual = await AsyncStorage.getItem('tarefas');
        const tarefas = jsonAtual ? JSON.parse(jsonAtual) : [];
        tarefas.push(newTask)
        await AsyncStorage.setItem('tarefas', JSON.stringify(tarefas));
    } catch (e) {
        console.error('Erro ao salvar tarefa', e);
    }
};

export const loadTask = async () => {
    try {
        const json = await AsyncStorage.getItem('tarefas');
        return json ? JSON.parse(json) : [];
    } catch (e) {
        console.error('Erro ao carregar tarefas', e);
        return null;
    }
};

export const limparTarefas = async () => {
    try {
        await AsyncStorage.removeItem('tarefas');
        console.log('Todas as tarefas foram removidas')
    } catch (error) {
        console.error('Erroa ao remover tarefas:', error);
    }
}

// export const limparLocal = async () => {
//     try {
//         await AsyncStorage.clear();
//     } catch (e) {
//         console.error('Erro ao limpar dados locais', e);
//     }
// };
