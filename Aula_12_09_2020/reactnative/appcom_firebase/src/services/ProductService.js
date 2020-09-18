import firebaseService from './FirebaseService';

const DATABASE_REF = '';//a referência do banco de dados

const getDbReference = () => {
    return firebaseService.database().ref(DATABASE_REF)
}

export default getDbReference;