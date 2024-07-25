import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AppShell, Burger, Group, Image, MantineProvider, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { theme } from '@/theme';

export default function App({ Component, pageProps }: AppProps) {
    const [opened, { toggle }] = useDisclosure();
    return (
        <MantineProvider theme={theme}>
            <Head>
                <title>Minecraft CAG</title>
                <meta
                  name="viewport"
                  content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <AppShell header={{ height: 60 }}>
                <AppShell.Header>
                    <Group h="100%" px="md">
                        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                        {/*<IconBrandMantine size={30} />*/}
                        <Image src="/favicon.png" height={40} />
                        <Title>Minecraft CAG</Title>
                    </Group>
                </AppShell.Header>
                <AppShell.Main>
                    <Component {...pageProps} />
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
}
