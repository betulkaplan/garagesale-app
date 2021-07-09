import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import ProductCard from '../components/ProductCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: theme.spacing(3),
    maxWidth: '80%',
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
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
    <Grid
      container
      spacing={6}
      alignItems="center"
      className={classes.container}
    >
      {products ? (
        products.map((product, index) => {
          console.log(index, '->', product.data());
          console.log(index, 'resim->', product.data().data.image);
          return (
            <Grid key={index} item xs={2}>
              <ProductCard
                title={product.data().data.title}
                image={product.data().data.image}
              />
            </Grid>
          );
        })
      ) : (
        <h1>BOŞ</h1>
      )}
    </Grid>
  );
};

export default Dashboard;
