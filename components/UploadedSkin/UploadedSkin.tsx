import {Button, FileInput, Group, Image, Stack, TextInput} from "@mantine/core";

export default function UploadedSkin() {
    return (
        <Stack
            align="center"
            justify="center"
            gap="md"
        >
            <FileInput
                size="md"
                placeholder="点击上传皮肤"
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
    )
}
