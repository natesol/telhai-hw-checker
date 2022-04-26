import { Link } from 'react-router-dom';

import { useMantineColorScheme, Anchor, Image } from '@mantine/core';

import telhaiLogo from '../../images/telhai-logo.png';

export function Logo({ to, align, variant, style, ...props }) {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    if (!variant) {
        variant = colorScheme === 'light' ? 'white' : 'black';
    }

    const logo = (
        <Image
            classNames={{
                root: `Logo ${variant}`,
            }}
            src={telhaiLogo}
            styles={{
                root: { height: 'calc(0.8 * var(--header-h))', aspectRatio: '3', ...style },
            }}
            {...props}
        />
    );

    return (
        <>
            {to ? (
                <Anchor component={Link} to={to} variant='text'>
                    {logo}
                </Anchor>
            ) : (
                logo
            )}
        </>
    );
}

export default Logo;
