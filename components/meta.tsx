/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import { NextComponentType, NextPageContext } from 'next';

type Props = {
  pageTitle: string;
  pageUrl: string;
  pageOgImage: string;
  noIndex?: boolean;
};

export const Meta: NextComponentType<NextPageContext, null, Props> = ({
  pageTitle,
  pageUrl,
  pageOgImage,
  noIndex = false,
}) => {
  const defaultTitle = '音出せて偉い！';
  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
  const description = '「音出せて偉い！」の公式サイトです。';
  const siteName = '音出せて偉い！';
  // FIXME: ドメイン取得できたらここを設定する
  const domain = 'otodaseteerai.com';
  const url = pageUrl ? `https://${domain}/${pageUrl}/` : `https://${domain}/`;
  const ogImage = pageOgImage || `https://${domain}/ogp.png`;

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="ja_JP" />
      <meta property="fb:app_id" content="" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@otode_eraichan" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      {/* noIndex === true の場合のみ noindex 有効化 */}
      {noIndex && <meta name="robots" content="noindex" />}
      <link rel="shortcut icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    </Head>
  );
};
