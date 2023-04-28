import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta base  */}
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="We are engaged in the creation and installation of luxurious kitchens that will fit perfectly into your interior and will be as practical as possible."
        />
        {/* Favicons  */}
        <link
          rel="apple-touch-icon"
          href="favicons/App Icon - 192 x 193.png"
          sizes="192x193"
        />
        <link
          rel="apple-touch-icon"
          href="favicons/App Icon - 512 x 513.png"
          sizes="512x513"
        />
        <link
          rel="apple-touch-icon"
          href="favicons/Apple Touch Icon - 152 x 153.png"
          sizes="152x153"
        />
        <link
          rel="apple-touch-icon"
          href="favicons/Apple Touch Icon - 167 x 168.png"
          sizes="167x168"
        />
        <link
          rel="apple-touch-icon"
          href="favicons/Apple Touch Icon - 180 x 181.png"
          sizes="180x181"
        />
        <link rel="shortcut icon" href="/favicons/FavIcon - 32 x 32.png" />
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
