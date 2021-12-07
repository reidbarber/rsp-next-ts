import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SSRProvider, Provider, lightTheme, darkTheme, ActionButton, Flex, View } from '@adobe/react-spectrum'
import { useState } from 'react';
import Moon from '@spectrum-icons/workflow/Moon';
import Light from '@spectrum-icons/workflow/Light';

type ThemeOption = 'light' | 'dark';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<ThemeOption>('light');

  let themes = {'light': lightTheme, 'dark': darkTheme };
  let themeIcons = {'dark': <Moon />, 'light': <Light />}
  let otherTheme: 'light' | 'dark' = theme === 'light' ? 'dark' : 'light';

  return (
    <SSRProvider>
      <Provider theme={themes[theme]}>
        <View padding="size-100">
          <Flex direction="row" gap="size-100" justifyContent="end">
            <ActionButton
              aria-label={`Switch to ${otherTheme} mode.`}
              onPress={() => setTheme(otherTheme)}>
                {themeIcons[otherTheme]}
            </ActionButton>
          </Flex>
        </View>
        <Component {...pageProps} />
      </Provider>
    </SSRProvider>
  );
}
export default MyApp
