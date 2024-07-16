import { TinaProvider, TinaCMS } from 'tinacms';
import tinaConfig from '../tina/config';

function MyApp({ Component, pageProps }) {
  const cms = new TinaCMS(tinaConfig);

  return (
    <TinaProvider cms={cms}>
      <Component {...pageProps} />
    </TinaProvider>
  );
}

export default MyApp;
