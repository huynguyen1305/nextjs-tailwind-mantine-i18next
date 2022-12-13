import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { appSEOConfig } from '@/config/appSEOConfig';

type IAppSEOProps = {
  title: string;
  description: string;
  canonical?: string;
};

const AppSEO = (props: IAppSEOProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={props.title || appSEOConfig.title}
        description={props.description || appSEOConfig.description}
        canonical={props.canonical || appSEOConfig.canonical}
        openGraph={{
          title: props.title || appSEOConfig.title,
          description: props.description || appSEOConfig.description,
          url: props.canonical || appSEOConfig.canonical,
          locale: appSEOConfig.locale,
          site_name: appSEOConfig.site_name,
        }}
      />
    </>
  );
};

export { AppSEO };
