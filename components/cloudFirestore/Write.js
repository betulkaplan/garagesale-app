import firebase from 'firebase/app';
import 'firebase/firestore';
import { useState } from 'react';

const WriteToCloudFirestore = () => {
  const [datam, setDatam] = useState('');
  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection('myCollection')
        .doc('myDocument')
        .set({ id: datam })
        .then(alert('Data was succesfully was sent.'));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <input value={datam} onChange={(e) => setDatam(e.target.value)} />
      <button onClick={sendData}>Send data</button>
    </>
  );
};

export default WriteToCloudFirestore;
