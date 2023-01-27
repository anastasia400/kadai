import Head from 'next/head';
import Script from 'next/script';
import Footer from './footer';
import Navigation from './navigation';

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content={description || ''} />
        <meta name="author" content="" />
        <title>{title && `${title} | `}Tech Blog</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
          rel="stylesheet"
          type="text/css"
        />
        <link href="/css/styles.css" rel="stylesheet" />
      </Head>

      <Navigation />
      {children}
      <Footer />

      <Script
        src="https://use.fontawesome.com/releases/v6.1.0/js/all.js"
        crossorigin="anonymous"
      ></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
      <Script src="js/scripts.js"></Script>
    </>
  );
}