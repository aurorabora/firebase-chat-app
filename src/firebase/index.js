import firebase from 'firebase/app';
import 'firebase/database';
import config from '../config';

const App = firebase.initializeApp(config.firebase);



export default firebase.database();
