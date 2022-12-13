import type { GetStaticProps } from 'next';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { AppSEO } from '@/components/AppSEO/AppSEO';
import testImg from '@/public/assets/images/pc-background.jpg';

const Page2 = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <AppSEO title={t('about')} description="Page 2 description" />
      <section>
        <Image
          src={testImg}
          alt="testPic"
          style={{
            width: '100vw',
            height: 'auto', // For responsive image
            maxHeight: 'calc(100vh - 68px)',
            objectFit: 'cover',
          }}
          priority
        />
      </section>

      <hr />

      <section>
        <div style={{ position: 'relative' }}>
          <Image
            src="https://nxas.nexon.com/images/background/pc-background-07.png"
            alt="testPic"
            width={1920} // any, Next.js will resize
            height={1080} // any, Next.js will resize
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: 'calc(100vh - 68px)',
              objectFit: 'cover',
            }}
            unoptimized
          />
        </div>
      </section>

      <hr />

      <section>
        <p>Lorem ipsum Lorem ipsum</p>
        <p>Lorem ipsum Lorem ipsum</p>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
      // Will be passed to the page component as props
    },
  };
};

export default Page2;
