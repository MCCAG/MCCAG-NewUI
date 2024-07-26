'use client';

import { Button, Stack, TextInput, Group, Image, LoadingOverlay } from '@mantine/core';
import { useState } from 'react';
import { SERVER_HOME } from '@/components/ServerProperties';

export function OfficialIdSkin() {
    const [input, setInput] = useState('');
    const [imageLink, setImageLink] = useState('');
    const [loading, setLoading] = useState(false);

    return (
        <Stack
          align="center"
          justify="center"
          gap="md"
        >
            <LoadingOverlay visible={loading} zIndex={1000} overlayProps={{ blur: 2 }} />
            <TextInput
              size="md"
              placeholder="正版 ID"
              radius="md"
              style={{
                    boxShadow: '0 0 0 2px #5392EF',
                    borderRadius: '8px',
                }}
              w={290}
              value={input}
              onChange={(e) => {
                    setInput(e.currentTarget.value);
                }}
            />
            <Group w={290} justify="space-between">
                <Button onClick={() => {
                    setLoading(true);
                    setImageLink(`${SERVER_HOME}/loader/minecraft.net/player/${input}`);
                }}>
                    生成
                </Button>
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
              src={imageLink}
              fallbackSrc="/square.jpg"
              onLoad={() => {
                    setLoading(false);
                }}
              onError={(e) => {
                  console.log(e);
              }}
            />
            <Group>
                <Button variant="subtle">发布作品</Button>
                <Button variant="subtle">分享</Button>
                <Button variant="subtle">上传背景</Button>
            </Group>
        </Stack>
    );
}
