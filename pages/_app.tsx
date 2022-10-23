import '../styles/globals.css'
import type { AppProps } from 'next/app'
import News from '../components/News/News'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/footer/Footer'
import { CartProvider } from '../components/Context/CartContext'
import { ProductProvider } from '../components/Context/ProductsContext'

function MyApp({ Component, pageProps }: AppProps) {
return (
  
  <CartProvider>
    <ProductProvider>
  <News/>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </ProductProvider>
    </CartProvider>

)
  
}

export default MyApp
