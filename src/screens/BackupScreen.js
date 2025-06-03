// import React from 'react';
// import { View, Button } from 'react-native';
// import { salvarLocalmente, carregarLocalmente } from '../storage/localStorage';
// import { salvarNoFirebase, carregarDoFirebase } from '../services/firebase';

// export default function BackupScreen() {
//   const userId = 'user123'; // pode ser auth.uid se estiver usando autenticação

//   const fazerBackup = async () => {
//     const dados = await carregarLocalmente('minhasTarefas');
//     if (dados) {
//       await salvarNoFirebase(userId, dados);
//       alert('Backup feito com sucesso!');
//     }
//   };

//   const restaurarBackup = async () => {
//     const dadosRemotos = await carregarDoFirebase(userId);
//     if (dadosRemotos) {
//       await salvarLocalmente('minhasTarefas', dadosRemotos);
//       alert('Backup restaurado com sucesso!');
//     }
//   };

//   return (
//     <View>
//       <Button title="Fazer Backup" onPress={fazerBackup} />
//       <Button title="Restaurar Backup" onPress={restaurarBackup} />
//     </View>
//   );
// }
