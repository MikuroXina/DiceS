import withRedux from 'next-redux-wrapper';
import {Provider} from 'react-redux';
import App, {Container} from 'next/app';
import store from '../components/store';

const DiceSApp = ({Component, pageProps, store}) => (
  <Container>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </Container>
);

DiceSApp.getInitialProps = async ({Component, ctx}) => ({
  pageProps: Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {}
});

export default withRedux(store)(DiceSApp);
