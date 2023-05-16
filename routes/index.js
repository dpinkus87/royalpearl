const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({origin: true}));

var serviceAccount = require('../src/config');
const { QuerySnapshot } = require('firebase/firestore');
admin.initializeApp({
   credential: admin.credential.cert(serviceAccount),
   databaseURL: "https://royal-pearl-e3254.firebaseio.com"
})

const db = admin.firestore()

app.get('/', (req, res) => {
   (async () => {
      try {
         let query = db.collection('category')
         let response = [];
         await query.get().then(QuerySnapshot => {
            let docs = QuerySnapshot.docs;
            for (let doc of docs) {
               const selectedItem = {
                  id: doc.id,
                  item: doc.data().item
               };
               response.push(selectedItem)
            }
         });
         return res.status(200).send(response)
      } catch (error) {
      console.log(error);
      return res.status(500).send(error);
   }
})();
});

exports.app = functions.https.onRequest(app)