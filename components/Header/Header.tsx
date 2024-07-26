import { ActionIcon, Burger, Button, Container, Group, Image, Menu, Title } from '@mantine/core';
import React, { useState } from 'react';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import classes from './header.module.css';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { LanguageToggle } from '@/components/LanguageToggle/LanguageToggle';

export default function Header() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <header className={classes.header}>
            <Container>
                <div className={classes.inner}>
                    <Group h="100%" px="md">
                        <Image src="/favicon.png" height={40} />
                        <Title c="#5392EF">Minecraft CAG</Title>
                        <Menu opened={opened}>
                            <Menu.Target>
                                <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="xs" c="#5392EF" />
                                {/*<ActionIcon size="lg" variant="default" hiddenFrom="xs" c="#5392EF" onClick={() => { setOpened(!opened); }}>*/}
                                {/*    {opened ? <IconChevronUp /> : <IconChevronDown />}*/}
                                {/*</ActionIcon>*/}
                            </Menu.Target>

                            <Menu.Dropdown>
                                <Group>
                                    <ColorSchemeToggle />
                                    <LanguageToggle />
                                </Group>
                            </Menu.Dropdown>
                        </Menu>
                    </Group>

                    <Group gap={10} justify="flex-end" visibleFrom="xs">
                        <ColorSchemeToggle />
                        <LanguageToggle />
                    </Group>
                </div>
            </Container>
        </header>
    );
}
