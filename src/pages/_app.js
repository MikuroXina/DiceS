import { wrapper } from "../components/store";

const DiceSApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(DiceSApp);
