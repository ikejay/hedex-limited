import '../styles/globals.css';
import Layout from '../components/layout';
import 'tailwindcss/tailwind.css'
import '../css/main.css'

function MyApp({ Component, pageProps }) {
  return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
      )
}

export default MyApp
