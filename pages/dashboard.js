import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const Dashboard = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = () => {
    try {
      firebase //get the last number of product of the user
        .firestore()
        .collection('products')
        .get()
        .then((data) => {
          //console.log(data.docs);
          setProducts(data.docs);
        });
      console.log('Data was fethced succesfully');
    } catch (error) {
      console.log('***', error);
    }
  };
  return (
    <div>
      {products ? (
        products.map((product, index) =>
          console.log(index, '->', product.data())
        )
      ) : (
        <h1>BOŞ</h1>
      )}
    </div>
  );
};

export default Dashboard;
