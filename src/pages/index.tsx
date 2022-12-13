import { Button, Container } from '@mantine/core';
import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

import { AppSEO } from '@/components/AppSEO/AppSEO';

const Index = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const handleClickRedirect = () => {
    router.push('/page2');
  };
  return (
    <>
      <AppSEO title={t('home')} description="Homepage" />

      <hr />

      <section>
        <Container fluid>
          <Button onClick={handleClickRedirect}>Redirect to page 2</Button>
        </Container>
      </section>

      <section>
        <h1>{t('home')} haha</h1>
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

export default Index;
