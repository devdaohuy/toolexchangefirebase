import firebase from './firebase';

var db = firebase.firestore();

async function getAll(collection) {
    var docRef = db.collection(collection);
    try {
        const res = await docRef.get();
        const allData = res.docs.map(doc => ({
            id : doc.id,
            ...doc.data()
        }));
        //console.log(allData);
        return allData;
    } catch(err) {
        console.log(err);
        return { status : 400, info : 'Cannot Get Data' };
    }
};

async function getOne(collection,document) {
    var docRef = db.collection(collection).doc(document);
    try {
        const res = await docRef.get();
        const oneData = {
            id : res.id,
            ...res.data()
        };
        //console.log(oneData)
        return oneData;
    } catch(err) {
        console.log(err);
        return { status : 400, info : 'Cannot Get Data' };
    }
};

function setDocument(collection,data) {
    return db.collection(collection).add({...data});
};

function deleteDocument(collection,idDocument) {
    return db.collection(collection).doc(idDocument).delete();
};

function updateDocument(collection, idDocument, dataUpdate) {
    return db.collection(collection).doc(idDocument).update({
        games : firebase.firestore.FieldValue.arrayUnion({...dataUpdate})
    });
};

export {getAll,getOne,setDocument,deleteDocument,updateDocument};

