import type { ColorScheme } from '@mantine/core';
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

// https://mantine.dev/theming/theme-object/

export default function AppThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  // toggle mantine theme
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');

    setColorScheme(nextScheme);
  };

  // toggle tailwind theme
  useEffect(() => {
    if (colorScheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else document.documentElement.classList.remove('dark');
  }, [colorScheme]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        inherit
        theme={{
          colorScheme,
          lineHeight: '1.5',
          components: {
            AppShell: {
              styles: (theme) => ({
                main: {
                  backgroundColor:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[8] || '#141517'
                      : theme.colors.gray[0] || '#F8F9FA',
                },
              }),
            },
          },
        }}
      >
        <NotificationsProvider position="top-right">
          {children}
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
