import { initializeApp } from 'firebase/app';

// firebaseの認証情報
export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

// firebaseを初期化する
export const app = initializeApp(firebaseConfig);