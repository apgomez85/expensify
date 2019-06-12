import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// //child_removed
// database.ref('expenses').on('child_removed', snapshot => {
//   console.log((snapshot.key, snapshot.val()));
// });

// //child_changed
// database.ref('expenses').on('child_changed', snapshot => {
//   console.log((snapshot.key, snapshot.val()));
// });

// //child_added
// database.ref('expenses').on('child_added', snapshot => {
//   console.log((snapshot.key, snapshot.val()));
// });

// // database.ref('expenses').on('value', snapshot => {
// //   const expenses = [];
// //   snapshot.forEach(childSnapshot => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });
// //   console.log(expenses);
// // });

// // database
// //   .ref('expenses')
// //   .once('value')
// //   .then(snapshot => {
// //     const expenses = [];

// //     snapshot.forEach(childSnapshot => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// //   });

// // database.ref('expenses').push({
// //   description: 'Car payment',
// //   note: 'Honda fit',
// //   amount: 258,
// //   createdAt: 159615
// // });

// // database.ref('notes').push({
// //   title: 'Courses',
// //   body: 'MongoDB, Express, Node'
// // });

// // const notes = [
// //   {
// //     id: '12',
// //     title: 'First note',
// //     body: 'This is my note'
// //   },
// //   {
// //     id: '12dfasd',
// //     title: 'Another note',
// //     body: 'This is my note'
// //   }
// // ];

// // database.ref('notes').set(notes);

// // database.ref().on('value', snapshot => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// // });

// // database
// //   .ref()
// //   .once('value')
// //   .then(snapshot => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch(e => {
// //     console.log('Error fetching data', e);
// //   });

// // database
// //   .ref()
// //   .set({
// //     name: 'Adrian Gomez',
// //     age: 34,
// //     stressLevel: 6,
// //     job: {
// //       title: 'Software Developer',
// //       company: 'Google'
// //     },
// //     location: {
// //       city: 'Dana Point',
// //       country: 'United States'
// //     }
// //   })
// //   .then(() => {
// //     console.log('Data is saved!');
// //   })
// //   .catch(e => {
// //     console.log('This failed.', e);
// //   });

// // database
// //   .ref('attributes')
// //   .set({
// //     height: '5ft 8in',
// //     weight: 135
// //   })
// //   .then(() => {
// //     console.log('Attributes Saved.');
// //   })
// //   .catch(e => {
// //     console.log('Failed to save attributes.', e);
// //   });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });

// // database
// //   .ref('isSingle')
// //   .remove()
// //   .then(() => {
// //     console.log('Remove successful.');
// //   })
// //   .catch(e => {
// //     console.log('Failed to remove isSingle.', e);
// //   });
