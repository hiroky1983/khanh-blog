import NextDocument, { Html, Head, Main, NextScript } from "next/document";

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="vi">
        <Head />
        <meta name="description" content="かんちゃんのブログです" />
        <meta name="keywords" content="ブログ,日本,日本の文化,日本の生活" />
        <link rel="icon" href="/favicon.ico" />
        <title>k-blog</title>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
