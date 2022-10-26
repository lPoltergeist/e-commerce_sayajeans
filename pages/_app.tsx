import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Toaster} from 'react-hot-toast';
import NextNProgress from 'nextjs-progressbar';
import News from '../components/News/News'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/footer/Footer'
import { CartProvider } from '../components/Context/CartContext'
import { ProductProvider } from '../components/Context/ProductsContext'
import { AuthProvider } from '../components/Context/AuthContext';


function MyApp({ Component, pageProps }: AppProps) {
return (
  <> 
  <Toaster position='bottom-right'/>
  <AuthProvider>
  <CartProvider>
    <ProductProvider>
      <News/>
<Navbar/>
    <NextNProgress
    color="#f8f8f8" startPosition={1} stopDelayMs={200} height={5} showOnShallow={false}/>
    <Component {...pageProps} />
    <Footer/>

    </ProductProvider>
    </CartProvider>
    </AuthProvider>
    </>

)
  
}

export default MyApp
