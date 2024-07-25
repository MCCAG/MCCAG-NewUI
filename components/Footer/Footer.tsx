import { Center, Group, Space, Stack, Text } from '@mantine/core';
import Link from '@/components/Link/Link';
import classes from './footer.module.css';

export function Footer() {
    return (
        <Stack className={classes.footer}>
            <Space />
            <Center>
                <Group>
                    <Text>
                        制作：
                        <Link href="#">Keishi</Link>&nbsp;&nbsp;
                        <Link href="#">SerinaNya</Link>&nbsp;&nbsp;
                        <Link href="https://github.com/zrll12">zrll</Link>&nbsp;&nbsp;
                        <Link href="https://github.com/SnowballXueQiu">SnowballXueQiu</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                        <a>灵感来源：噪音回放</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                        赞助：
                        <Link href="#">DongYue</Link>
                    </Text>
                </Group>
            </Center>

            <Center>
                <Group>
                    <Text>
                        <Link href="https://github.com/MCCAG">Github项目页面</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                        <Link href="#">打赏给作者一杯咖啡！</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                        友链：
                        <Link href="https://klpbbs.com/">苦力怕论坛</Link>&nbsp;&nbsp;
                        <Link href="https://www.minebbs.com/">MineBBS</Link>&nbsp;&nbsp;
                        <Link href="https://www.rainyun.com/">雨云服务器</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                        网站总访问量：17147 次
                    </Text>
                </Group>
            </Center>
            <Space />
        </Stack>
    );
}
