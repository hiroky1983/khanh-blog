import NextDocument, { Html, Head, Main, NextScript } from "next/document";

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="vi">
        <Head />
        <meta
          name="description"
          content="カンちゃんのブログです。日本のことを書きます"
        />
        <meta
          name="keywords"
          content="ブログ,日本,日本の文化,日本の生活,ベトナム,ベトナム人,ベトナム語,カンちゃん,カン"
        />
        <meta name="robots" content="index,follow" />
        <link rel="icon" href="/favicon.ico" />
        <title>k-blog | カンちゃんのブログ・サイト </title>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
