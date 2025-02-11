
const functions = require("firebase-functions");
const Filter = require("bad-words");
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();

exports.detectEvilUsers = functions.firestore
    .document("messages/{msgId}")
    .onCreate(async (doc, ctx) => {
      const filter = new Filter();
      const {text, uid} = doc.data();

      // Check if the text contains profane words
      if (filter.isProfane(text)) {
        const cleaned = filter.clean(text);

        // Update the message text and ban the user
        await doc.ref.update({
          text: `🤐 I got BANNED for life for saying... ${cleaned}`,
        });

        await db.collection("banned").doc(uid).set({});
      }

      // Retrieve user data from the users collection
      const userRef = db.collection("users").doc(uid);
      const userData = (await userRef.get()).data();

      // Check if user has exceeded the message limit
      if (userData.msgCount >= 7) {
        await db.collection("banned").doc(uid).set({});
      } else {
      // Increment the user's message count
        await userRef.set({
          msgCount: (userData.msgCount || 0) + 1,
        });
      }
    });
