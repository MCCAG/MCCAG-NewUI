import {ActionIcon, Menu} from '@mantine/core';
import { IconLanguage } from '@tabler/icons-react';

export function LanguageToggle() {
    return (
        <Menu>
            <Menu.Target>
                <ActionIcon size="lg" variant="default"><IconLanguage /></ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Item>中文</Menu.Item>
                <Menu.Item>English</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}
