import firebase from 'firebase/app';
import 'firebase/firestore';
import { useState, useEffect, createContext } from 'react';
import Button from '@material-ui/core/Button';

const AddProduct = ({ user, data }) => {
  var lastProduct;

  function addProduct() {
    console.log('-2');
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
            sendData();
          } else {
            // console.log('daha data girilmemiş');
            lastProduct = 0;
            sendData();
          }
        });
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
  return (
    <>
      <button
        type="button"
        onClick={() => {
          addProduct();
        }}
      >
        Send data
      </button>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        // className={classes.submit}
      >
        Add
      </Button>
    </>
  );
};

export default AddProduct;

export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [name, setName] = useState('William');
  const [location, setLocation] = useState('Mars');

  return (
    <UserContext.Provider
      value={{
        name,
        location,
        setName,
        setLocation,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
