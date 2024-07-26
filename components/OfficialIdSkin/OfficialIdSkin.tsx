import { Button, Stack, TextInput, Group, Image } from '@mantine/core';

export function OfficialIdSkin() {
    return (
        <Stack
          align="center"
          justify="center"
          gap="md"
        >
            <TextInput
              variant="filled"
              size="md"
              placeholder="正版 ID"
              radius="md"
              style={{
                    boxShadow: '0 0 0 2px #5392EF',
                    borderRadius: '8px',
                }}
              w={290}
            />
            <Group w={290} justify="space-between">
                <Button>生成</Button>
                <Button variant="subtle">换背景</Button>
                <Button variant="subtle">下载</Button>
            </Group>
            <Image
              radius="md"
              h={290}
              w={290}
              style={{
                    boxShadow: '0 0 0 2px #5392EF',
                }}
              // src="https://picsum.photos/290/290"
              fallbackSrc="/square.jpg"
            />
            <Group>
                <Button variant="subtle">发布作品</Button>
                <Button variant="subtle">分享</Button>
                <Button variant="subtle">上传背景</Button>
            </Group>
        </Stack>
    );
}
