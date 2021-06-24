import firebase from 'firebase/app';
import 'firebase/firestore';

const WriteToCloudFirestore = () => {
  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection('myCollection')
        .doc('myDocument')
        .set({ id: 'test data' })
        .then(alert('Data was succesfully was sent.'));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button onClick={sendData}>Send data</button>
    </>
  );
};

export default WriteToCloudFirestore;
