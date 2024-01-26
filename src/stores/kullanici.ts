import { defineStore } from 'pinia';
import { collection, addDoc } from 'firebase/firestore';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCVbSGpC1uA-cCNFeZ9kLoeSj6jli_2rAw',
  authDomain: 'drfinalproje.firebaseapp.com',
  projectId: 'drfinalproje',
  storageBucket: 'drfinalproje.appspot.com',
  messagingSenderId: '1006609085250',
  appId: '1:1006609085250:web:d76317984cd9628a5f4edb',
  measurementId: 'G-BTYLN36S7Y',
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };

interface UserState {
  email: string;
  password: string;
}
export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    email: '',
    password: '',
  }),
  getters: {},
  actions: {
    async saveUserToFirebase(userState: UserState) {
      try {
        // Firebase'e kullanıcı bilgilerini ekleyin
        const docRef = await addDoc(
          collection(getFirestore(), 'users'),
          userState
        );
        console.log('Kullanıcı ID: ', docRef.id);
      } catch (error) {
        console.error('Kullanıcı error ', error);
      }
    },
    updateUser(newUserState: UserState) {
      this.email = newUserState.email;
      this.password = newUserState.password;
    },
  },
});
