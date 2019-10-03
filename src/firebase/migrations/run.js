const fs = require("fs");
const admin = require("firebase-admin");
const serviceAccount = require("../rolls-co-admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://rolls-co.firebaseio.com"
});

firestore = admin.firestore();

const configPathname = `${__dirname}/config`;
let indexMaxMigrationRun = parseInt(fs.readFileSync(configPathname, "utf8"));
console.log(`--Running migrations ${indexMaxMigrationRun} and higher...`);

for (i = indexMaxMigrationRun; i <= 99; i++) {
  try {
    require(`./${i}.js`);
  } catch (error) {
    fs.writeFile(configPathname, `${i}`, error => {});
    console.log(`--Ran migrations. Next migration to run: ${i}.`);
    console.log("--error", error);
    i = 100;
  }
}
