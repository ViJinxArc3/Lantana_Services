import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Lantana Services</title>
        <meta name="description" content="Lantana Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link 
        rel="stylesheet" 
        href="path/to/font-awesome/css/font-awesome.min.css"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
