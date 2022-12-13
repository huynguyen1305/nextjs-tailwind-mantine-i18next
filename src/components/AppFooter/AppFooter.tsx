import { useMantineColorScheme } from '@mantine/core';
import React from 'react';

const AppFooter = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <footer
      className="bg-slate-900 p-2"
      style={{
        backgroundColor: colorScheme === 'dark' ? '#141517' : '#F8F9FA',
      }}
    >
      This is Footer
    </footer>
  );
};

export default AppFooter;
