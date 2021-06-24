import firebase from 'firebase/app';
import 'firebase/firestore';

const ReadFromCloudFirestore = () => {
  const readData = () => {
    try {
      firebase
        .firestore()
        .collection('myCollection')
        .doc('myDocument')
        .onSnapshot((doc) => console.log(doc.data()));
      console.log('Data was fethced succesfully');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button onClick={readData}>Get Data</button>
    </>
  );
};

export default ReadFromCloudFirestore;
