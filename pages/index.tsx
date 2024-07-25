import {Box, Button, Card, Center, Container, SimpleGrid, Space, Stack, Tabs} from "@mantine/core";
import {ColorSchemeToggle} from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import {OfficialIdSkin} from "@/components/OfficialIdSkin/OfficialIdSkin"
import tabsStyle from "./tab.module.css";
import React from "react";

export default function HomePage() {
    return (
        <Container maw={690}>
            <Center maw={690} h={"calc(100vh - 60px - 97.59px)"}>
                <SimpleGrid>
                    <Card shadow="sm" padding="lg" radius="lg" withBorder >
                        <Card.Section>
                            <Tabs defaultValue="gallery" classNames={tabsStyle} variant="unstyled">
                                <Tabs.List style={{height: 40}} grow>
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
                                        Messages tab content
                                    </Tabs.Panel>

                                    <Tabs.Panel value="upload_skin">
                                        Settings tab content
                                    </Tabs.Panel>
                                    <Space h={40} />
                                </Box>
                            </Tabs>
                        </Card.Section>
                    </Card>
                </SimpleGrid>
            </Center>

        </Container>
    );
}
