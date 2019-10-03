const admin = require("firebase-admin");
const serviceAccount = require("./rolls-co-admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://rolls-co.firebaseio.com"
});

let firestore = admin.firestore();

const getDocWithId = queryDocumentSnapshot => ({
  id: queryDocumentSnapshot.id,
  ...queryDocumentSnapshot.data()
});

const getSubcollections = async (queryDocumentSnapshot, include) => {
  const subcollections = {};

  if (include) {
    await Promise.all(
      include.map(async detailLevelEntityPair => {
        // TODO take detailLevel into account
        const [detailLevel, entity] = detailLevelEntityPair.split("-");
        const entities = await get(
          `${queryDocumentSnapshot.ref.path}/${entity}`,
          include
        );

        subcollections[entity] = entities;
      })
    );
  }

  return subcollections;
};

const get = async (path, include) => {
  const querySnapshot = await firestore
    .collection(path)
    .orderBy("order")
    .get();

  const entities = await Promise.all(
    querySnapshot.docs.map(async doc => ({
      ...getDocWithId(doc),
      ...(await getSubcollections(doc, include))
    }))
  );

  return entities;
};

module.exports = {
  firestoreService: {
    get
  }
};
