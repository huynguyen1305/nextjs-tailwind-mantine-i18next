import { Select } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const ChangeLanguage = () => {
  const [lang, setLang] = useLocalStorage({
    key: 'lang',
    defaultValue: 'en',
    getInitialValueInEffect: true,
  });
  const router = useRouter();
  const handleLocaleChange = (value: string) => {
    router.push(router.route, router.asPath, {
      locale: value,
    });
    setLang(value);
  };

  useEffect(() => {
    if (router.locale) {
      setLang(router.locale);
    }
  }, [router.locale]);

  return (
    <Select
      data={[
        { value: 'en', label: 'English' },
        { value: 'ko', label: 'Korean' },
      ]}
      defaultValue="en"
      value={lang}
      onChange={handleLocaleChange}
    />
  );
};

export default ChangeLanguage;
