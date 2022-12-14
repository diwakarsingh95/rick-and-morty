import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name='application-name' content='Rick & Morty Show' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/icon.png'></link>
        <meta name='theme-color' content='#000000' />
        <link rel='shortcut icon' href='/favicon.ico' />

        <meta name='twitter:card' content='summary' />
        <meta
          name='twitter:url'
          content='https://rick-and-morty-show.vercel.app'
        />
        <meta name='twitter:title' content='Rick and Morty Show' />
        <meta
          name='twitter:description'
          content='Your one stop for all information about Rick and Morty show.'
        />
        <meta
          name='twitter:image'
          content='https://rick-and-morty-show.vercel.app/icon-192x192.png'
        />
        <meta name='twitter:creator' content='@d_coder_' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Rick and Morty Show' />
        <meta property='og:description' content='Your one stop for all information about Rick and Morty show.' />
        <meta property='og:site_name' content='Rick and Morty Show' />
        <meta property='og:url' content='https://rick-and-morty-show.vercel.app' />
        <meta
          property='og:image'
          content='https://rick-and-morty-show.vercel.app/icon-192x192.png'
        />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
