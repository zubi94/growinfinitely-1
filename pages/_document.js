import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <title>StraightUp Growth</title>
          {styleTags}

        </Head>
        <body>
          <div className='root'>
            {main}
          </div>
          <NextScript />
          <style jsx global>{`

            @import url('https://fonts.googleapis.com/css?family=Fira+Mono:700|Fira+Sans:300');


             body {
              font-family: 'Fira Sans', Avenir, sans-serif;
             }


             a {
               display: inline-block;
               margin: 0 15px;
               text-decoration: none;
               text-transform: uppercase;
               font-size: 1em;
               color: gray;
             }
             a:visited {
               color: gray;
               text-transform: uppercase;
               text-decoration: none;
             }
             a:hover {
               color: black;
               text-decoration: underline;
             }

             h1 {
               font-family: 'Fira Mono';
               text-transform: uppercase;
               font-weight: 100;
               color: gray;
               font-size: 1.5em;
               font-family: 'Fira Mono'
             }

             h2 {
               font-family: 'Fira Mono';
               text-transform: uppercase;
               font-weight: 100;
               color: gray;
               font-size: 1.0em;
             }
          `}</style>
        </body>
      </html>
    )
  }
}
