import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='en-US'>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

                    <meta charSet='utf-8' />
                    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                    <meta name='description' content='A simple fake restaurant application' />
                    <meta name='keywords' content='restaurant foods management dishes' />
                    <link rel="manifest" href="/manifest.json" />

                    <link rel="icon" href="favicon.svg" />
                    <link rel="mask-icon" href="mask-icon.svg" color="#171923" />
                    <link rel="apple-touch-icon" href="apple-touch-icon.png" />

                    <meta name="theme-color" content="#171923" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}