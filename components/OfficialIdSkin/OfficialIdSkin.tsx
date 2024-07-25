import {Button, Stack, TextInput, SimpleGrid, Group, Space, Image} from '@mantine/core';

export function OfficialIdSkin() {

    return (
        <Stack
            bg="var(--mantine-color-body)"
            align="center"
            justify="center"
            gap="md"
        >
            <TextInput
                variant="filled"
                size="md"
                placeholder="请输入正版 ID"
                radius="md"
                style={{
                    boxShadow: '0 0 0 3px #5392EF',
                    borderRadius: '8px',
                }}
                w={290}
            />
            <Group w={290} justify="space-between">
                <Button>生成</Button>
                <Button variant={"subtle"}>换背景</Button>
                <Button variant={"subtle"}>下载</Button>
            </Group>
            <Image
                radius="md"
                h={290}
                w={290}
                style={{
                    boxShadow: '0 0 0 3px #5392EF',
                }}
                src="https://picsum.photos/290/290"
            />
            <Group>
                <Button variant={"subtle"}>发布作品</Button>
                <Button variant={"subtle"}>分享</Button>
                <Button variant={"subtle"}>上传背景</Button>
            </Group>
        </Stack>
    );
}
