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
        <div style={{ position: 'relative', width: '500px' }}>
          <Image
            src="https://nxas.nexon.com/images/background/pc-background-07.png"
            alt="testPic"
            width={1280} // This will be resolution of image. Suggest: 1280x720 (HD)
            height={720} // This will be resolution of image. Suggest: 1280x720 (HD)
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }} // Treat image span full parent div width
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
