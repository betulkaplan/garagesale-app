import firebase from 'firebase/app';
import 'firebase/firestore';
import { useRouter } from 'next/router';

import { Children } from 'react';
import { createContext } from 'react';

export const AddProdContext = createContext(null);

export const AddProdProvider = ({ children }) => {
  const router = useRouter();
  var lastProduct;
  function addProduct(user, data) {
    console.log('Başladık');
    try {
      firebase //get the last number of product of the user
        .firestore()
        .collection('users')
        .doc(user.email)
        .get()
        .then((sn) => {
          if (sn.exists) {
            // console.log('---->', sn.data());
            lastProduct = sn.data().last_product;
            sendData(user, data);
          } else {
            // console.log('daha data girilmemiş');
            lastProduct = 0;
            sendData(user, data);
          }
        });
      console.log('Data was fethced succesfully');
    } catch (error) {
      console.log('***', error);
    }
  }
  function sendData(user, data) {
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
            .then(() => {
              console.log('2- kullanıcı güncellendi');
              router.push('/dashboard');
            });
        });
      console.log('3-');
    } catch (error) {
      console.log(error);
      console.log('error');
    }
  }
  return (
    <AddProdContext.Provider value={addProduct}>
      {children}
    </AddProdContext.Provider>
  );
};
