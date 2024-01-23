import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { createApp } from 'vue';

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
const db = getFirestore(app);
const app1 = createApp(App);
app1.use(router);
app1.mount('#app');
export { db };
