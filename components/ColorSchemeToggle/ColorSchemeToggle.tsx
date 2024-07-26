'use client';

import { ActionIcon, MantineColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconBrightness2, IconBrightnessAuto, IconMoonStars } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

const schemes = [
    { scheme: 'auto', icon: <IconBrightnessAuto /> },
    { scheme: 'light', icon: <IconBrightness2 /> },
    { scheme: 'dark', icon: <IconMoonStars /> },
];

export function ColorSchemeToggle() {
    const { setColorScheme } = useMantineColorScheme();
    const [selected, setSelected] = useState(0);

    function selectNextColorScheme() {
        const nextSelected = selected <= 1 ? selected + 1 : 0;

        setColorScheme(schemes[nextSelected].scheme as MantineColorScheme);
        setSelected(nextSelected);
    }

    useEffect(() => { setColorScheme('auto'); }, []);

    return (
        <ActionIcon onClick={selectNextColorScheme} size="lg" variant="default">{schemes[selected].icon}</ActionIcon>
    );
}
