import { Box, Card, Center, Container, SimpleGrid, Space, Stack, Tabs } from '@mantine/core';
import React from 'react';
import { OfficialIdSkin } from '@/components/OfficialIdSkin/OfficialIdSkin';
import tabsStyle from './tab.module.css';
import { Footer } from '@/components/Footer/Footer';
import SkinServerSkin from '@/components/SkinServerSkin/SkinServerSkin';
import UploadedSkin from '@/components/UploadedSkin/UploadedSkin';

export default function HomePage() {
    return (
        <Container maw={780}>
            <Space h="10vh" />
            <Center maw={780}>
                <SimpleGrid cols={{ base: 1, lg: 2 }} spacing={50}>
                    <Card shadow="sm" padding="lg" radius="lg" withBorder>
                        <Card.Section>
                            <Tabs defaultValue="genuine_id" classNames={tabsStyle} variant="unstyled">
                                <Tabs.List style={{ height: 40 }} grow>
                                    <Tabs.Tab value="genuine_id">
                                        正版 ID
                                    </Tabs.Tab>
                                    <Tabs.Tab value="skin_site">
                                        皮肤站
                                    </Tabs.Tab>
                                    <Tabs.Tab value="upload_skin">
                                        上传皮肤
                                    </Tabs.Tab>
                                </Tabs.List>

                                <Box w={365} h={500}>
                                    <Space h={30} />
                                    <Tabs.Panel value="genuine_id">
                                        <OfficialIdSkin />
                                    </Tabs.Panel>

                                    <Tabs.Panel value="skin_site">
                                        <SkinServerSkin />
                                    </Tabs.Panel>

                                    <Tabs.Panel value="upload_skin">
                                        <UploadedSkin />
                                    </Tabs.Panel>
                                    <Space h={40} />
                                </Box>
                            </Tabs>
                        </Card.Section>
                    </Card>

                    <Card>
                        <Card.Section shadow="sm" padding="lg" radius="lg" withBorder>
                            111
                        </Card.Section>
                    </Card>
                </SimpleGrid>

            </Center>
            <Space h="13vh" />

        </Container>
    );
}
