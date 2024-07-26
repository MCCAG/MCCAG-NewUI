import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AppShell, Burger, Group, Image, MantineProvider, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { theme } from '@/theme';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { Footer } from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

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
                    <Header />
                </AppShell.Header>

                <AppShell.Main>
                    <Component {...pageProps} />
                    <Footer />
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
}
