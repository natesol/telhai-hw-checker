/* ------------------------------------------------------------------------------------------------ */
/* ---- React Component - Page Template Layout (shared layout) ------------------------------------ */

import { Outlet } from 'react-router-dom';

import { Container } from '@mantine/core';

import { Body, Header } from '../index';

export const PageTemplate = () => {
    const appSize = 'md';

    return (
        <Body size={appSize}>
            <Header size={appSize} />
            <Container
                size={appSize}
                className='Main'
                component='main'
                sx={{
                    maxWidth: 'unset',
                    paddingInline: '0',
                }}
            >
                <Outlet />
            </Container>
        </Body>
    );
};

export default PageTemplate;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
