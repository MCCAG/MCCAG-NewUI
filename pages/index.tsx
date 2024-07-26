import {
    Box,
    Card,
    Center,
    Container,
    SimpleGrid,
    Space,
    Stack,
    Tabs,
    Text,
    ScrollArea,
    Group,
    Button
} from '@mantine/core';
import React, {useState} from 'react';
import { OfficialIdSkin } from '@/components/OfficialIdSkin/OfficialIdSkin';
import tabsStyle from './tab.module.css';
import SkinServerSkin from '@/components/SkinServerSkin/SkinServerSkin';
import UploadedSkin from '@/components/UploadedSkin/UploadedSkin';
import {ImageCard} from "@/components/ImageCard/ImageCard";

export default function HomePage() {
    let [showLeast, setShowLeast] = useState(true);

    return (
        <Container maw={850}>
            <Space h="10vh" />
            <Center maw={850}>
                <SimpleGrid cols={{ base: 1, lg: 2 }} spacing={50}>
                    <Card shadow="sm" padding="lg" radius="lg" withBorder h={540}>
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

                                <Box w={365}>
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

                    <Card shadow="sm" padding="lg" radius="lg" withBorder h={540}>
                        <Card.Section
                          shadow="sm"
                          padding="lg"
                          radius="lg"
                          style={{ backgroundColor: 'rgba(83, 146, 239, 0.3)', height: 40 }}
                          withBorder>
                            <Center h={40}>
                                <Text style={{ color: 'var(--mantine-color-blue-filled)', fontSize: 18, fontWeight: 'bold' }}>
                                    用户作品
                                </Text>
                            </Center>
                        </Card.Section>
                        <Box>
                            <Space h={30} />
                            <Center>
                                <Stack>
                                    <ScrollArea h={"auto"}>
                                        <SimpleGrid cols={2}>
                                            <ImageCard url={"https://picsum.photos/130/130"} />
                                            <ImageCard url={"https://picsum.photos/130/130"} />
                                            <ImageCard url={"https://picsum.photos/130/130"} />
                                            <ImageCard url={"https://picsum.photos/130/130"} />
                                            <ImageCard url={"https://picsum.photos/130/130"} />
                                            <ImageCard url={"https://picsum.photos/130/130"} />
                                        </SimpleGrid>
                                    </ScrollArea>
                                    <Group justify={"center"}>
                                        <Button variant={showLeast ? "filled": "subtle"} onClick={() => {
                                            setShowLeast(true);
                                        }}>最新</Button>
                                        <Button variant={showLeast ? "subtle": "filled"} onClick={() => {
                                            setShowLeast(false);
                                        }}>最热</Button>
                                        <Button>换一批</Button>
                                    </Group>
                                </Stack>
                            </Center>
                        </Box>
                    </Card>
                </SimpleGrid>

            </Center>
            <Space h="10vh" />

        </Container>
    );
}
