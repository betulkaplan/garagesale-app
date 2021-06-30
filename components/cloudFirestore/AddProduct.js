import firebase from 'firebase/app';
import 'firebase/firestore';
import { useState, useEffect } from 'react';

const WriteToCloudFirestore = ({ user, data }) => {
  const [datam, setDatam] = useState('');
  var lastProduct;

  async function readData() {
    console.log('-2');
    try {
      firebase
        .firestore()
        .collection('users')
        .doc(user.email)
        .get()
        .then((sn) => {
          console.log(sn.data());
          lastProduct = sn.data().last_product;
          sendData();
        });
      // firebase
      //   .firestore()
      //   .collection('users')
      //   .doc(user.email)
      //   .onSnapshot((doc) => {
      //     lastProduct = doc.data().last_product;
      //     console.log('-1', lastProduct);
      //   });
      console.log('Data was fethced succesfully');
    } catch (error) {
      console.log(error);
    }
  }
  function sendData() {
    console.log('0');
    try {
      firebase
        .firestore()
        .collection('products')
        .doc(user.id + `-${lastProduct + 1}`)
        .set({ data: data })
        .then(() => {
          console.log('1- ürün yazıldı');
          firebase
            .firestore()
            .collection('users')
            .doc(user.email)
            .set({ last_product: lastProduct + 1 })
            .then(console.log('2- kullanıcı güncellendi'));
        });
      console.log('3-');
    } catch (error) {
      console.log(error);
      console.log('error');
    }
  }
  console.log('4');
  //sendData();
  return (
    <>
      <input value={datam} onChange={(e) => setDatam(e.target.value)} />
      <button
        type="button"
        onClick={() => {
          readData();
          //setTimeout(() => sendData(), 1500);
        }}
      >
        Send data
      </button>
      {/* <button type="button" onClick={sendData}>
        Send data
      </button> */}
    </>
  );
};

export default WriteToCloudFirestore;
