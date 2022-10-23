import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    render() {
        return(
            <Html lang="en">
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"/>
                
                
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/apple-icon.png"></link>
                <link rel="shortchut icon" href="favicon.ico" type="image/icon"/>

                <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"></link>

                <meta name='descriptio' content='Underdark, conteúdo sobre RPG escrito por fãs de RPG. ' />
                
                <meta property="og:title" content="Underdark, conteúdo sobre RPG escrito por fãs de RPG. " />
                <meta property="og:description" content="A Bíblia de Underdark" />
                <meta property="og:image" content="/logo.png" />

                
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                </Head>
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
                <meta name="description" content="description of your project" />
                <meta name="theme-color" content="#000" />
                <body>
                   <Main/>
                   <NextScript />
                </body>
            </Html>
        )
    }
}