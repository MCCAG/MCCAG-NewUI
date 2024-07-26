import {IconEye, IconHeart, IconMessageCircle} from '@tabler/icons-react';
import {Card, Text, Group, Center, rem, useMantineTheme, Button, Stack, Flex, ActionIcon} from '@mantine/core';
import classes from './ImageCard.module.css';

export function ImageCard(props: ImageCardProps) {
    const theme = useMantineTheme();

    return (
        <Card
            p="lg"
            shadow="lg"
            className={classes.card}
            h={120}
            w={120}
        >
            <div
                className={classes.image}
                style={{
                    backgroundImage:
                        `url(${props.url})`,
                }}
            >
                <Flex justify={"flex-end"} align={"flex-end"} w={115} h={115}>
                    <ActionIcon>
                        <IconHeart
                            style={{
                                width: rem(18),
                                height: rem(18)
                            }}
                            stroke={2}
                        />
                    </ActionIcon>
                </Flex>
            </div>
        </Card>
    );
}

export interface ImageCardProps {
    url: string;
}
