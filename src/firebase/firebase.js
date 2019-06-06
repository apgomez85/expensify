import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCyfUDsUjjtghbsPauPpU8NO_XTf9v0kkQ',
  authDomain: 'expensify-f1119.firebaseapp.com',
  databaseURL: 'https://expensify-f1119.firebaseio.com',
  projectId: 'expensify-f1119',
  storageBucket: 'expensify-f1119.appspot.com',
  messagingSenderId: '302445078037',
  appId: '1:302445078037:web:25713227555c615c'
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database
  .ref()
  .set({
    name: 'Adrian Gomez',
    age: 34,
    stressLevel: 6,
    job: {
      title: 'Software Developer',
      company: 'Google'
    },
    location: {
      city: 'Dana Point',
      country: 'United States'
    }
  })
  .then(() => {
    console.log('Data is saved!');
  })
  .catch(e => {
    console.log('This failed.', e);
  });

// database
//   .ref('attributes')
//   .set({
//     height: '5ft 8in',
//     weight: 135
//   })
//   .then(() => {
//     console.log('Attributes Saved.');
//   })
//   .catch(e => {
//     console.log('Failed to save attributes.', e);
//   });

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
});

// database
//   .ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Remove successful.');
//   })
//   .catch(e => {
//     console.log('Failed to remove isSingle.', e);
//   });
