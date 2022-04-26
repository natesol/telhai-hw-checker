import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useToggle } from '@mantine/hooks';
import {
    useMantineColorScheme,
    useMantineTheme,
    createStyles,
    Container,
    Group,
    Text,
    Modal,
    Button,
    Switch,
} from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';

import { Tooltip } from '../../components';

const useStyles = createStyles((theme) => ({
    icon: {
        pointerEvents: 'none',
        position: 'absolute',
        zIndex: 1,
        top: '.2rem',
        color: theme.white,
    },
    iconLight: {
        left: '.25rem',
    },
    iconDark: {
        right: '.25rem',
    },
}));

export function ThemeSwitch() {
    const theme = useMantineTheme();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const { classes, cx } = useStyles();

    return (
        <Tooltip tip={`Switch to ${colorScheme === 'dark' ? 'light' : 'dark'} theme`} position='auto'>
            <Group
                position='center'
                sx={{
                    position: 'relative',
                    '& *': {
                        cursor: 'pointer',
                    },
                }}
            >
                <Sun className={cx(classes.icon, classes.iconLight)} size='1.2rem' />
                <MoonStars className={cx(classes.icon, classes.iconDark)} size='1.2rem' />
                <Switch
                    checked={colorScheme === 'dark'}
                    onChange={() => toggleColorScheme()}
                    size='md'
                    styles={{
                        input: {
                            width: '3.2rem',
                            height: '1.5rem',
                            backgroundColor: theme.colors[theme.primaryColor][4],
                            borderColor: theme.colors[theme.primaryColor][4],
                            '&::before': { height: '1.15rem', width: '1.15rem', borderColor: theme.white },
                            '&:checked::before': {
                                transform: 'translateX(1.75rem)',
                            },
                            ':checked': {
                                backgroundColor: theme.colors[theme.primaryColor][9],
                                borderColor: theme.colors[theme.primaryColor][9],
                            },
                        },
                    }}
                />
            </Group>
        </Tooltip>
    );
}

export default ThemeSwitch;
