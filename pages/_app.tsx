import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AppShell, MantineProvider } from '@mantine/core';
import React from 'react';
import { theme } from '@/theme';
import { Footer } from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

export default function App({ Component, pageProps }: AppProps) {
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
            <AppShell header={{ height: 60 }} footer={{ height: 100 }}>
                <AppShell.Header>
                    <Header />
                </AppShell.Header>

                <AppShell.Main>
                    <Component {...pageProps} />
                </AppShell.Main>

                <AppShell.Footer>
                    <Footer />
                </AppShell.Footer>
            </AppShell>

            {/*<Footer />*/}
        </MantineProvider>
    );
}
