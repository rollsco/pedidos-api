const admin = require("firebase-admin");
const serviceAccount = require("./rolls-co-firebase-adminsdk-d6oam-705e76e865.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://rolls-co.firebaseio.com"
});

let firestore = admin.firestore();

const get = async (collection, relationships) => {
  const querySnapshot = await firestore.collection(collection).get();

  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

module.exports = {
  firestoreService: {
    get,
  },
}

