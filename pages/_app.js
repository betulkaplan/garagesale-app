import Layout from '../components/Layout';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import theme from '../styles/theme';
import Head from 'next/head';
import { UserContext } from '../contexts/UserContext';
import { useState } from 'react';
import { useUser } from '../firebase/useUser';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const { user2, logout } = useUser();
  const [user, setUser] = useState(user2);
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <UserContext.Provider value={[user, setUser]}>
        <Layout>
          <Head>
            <title>My page</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Layout>
      </UserContext.Provider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
