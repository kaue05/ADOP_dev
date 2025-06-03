// firebase.js

// configure com os dados do seu projeto Firebase
// import { initializeApp } from 'firebase/app';
// import { getDatabase, ref, set, get } from 'firebase/database';

// const firebaseConfig = {
//   apiKey: 'SUA_API_KEY',
//   authDomain: 'SEU_AUTH_DOMAIN',
//   databaseURL: 'SUA_DATABASE_URL',
//   projectId: 'SEU_PROJECT_ID',
//   storageBucket: 'SEU_STORAGE_BUCKET',
//   messagingSenderId: 'SEU_SENDER_ID',
//   appId: 'SEU_APP_ID'
// };

// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

// export const salvarNoFirebase = async (userId, dados) => {
//   try {
//     await set(ref(db, 'usuarios/' + userId + '/backup'), dados);
//   } catch (error) {
//     console.error('Erro ao salvar no Firebase', error);
//   }
// };

// export const carregarDoFirebase = async (userId) => {
//   try {
//     const snapshot = await get(ref(db, 'usuarios/' + userId + '/backup'));
//     return snapshot.exists() ? snapshot.val() : null;
//   } catch (error) {
//     console.error('Erro ao carregar do Firebase', error);
//     return null;
//   }
// };
