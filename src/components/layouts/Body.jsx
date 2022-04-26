/* ------------------------------------------------------------------------------------------------ */
/* ---- React Component - Body (Base Layout) ------------------------------------------------------ */

import { Container, ScrollArea } from '@mantine/core';

export const Body = ({ children, size = 'sm', ...props }) => {
    return (
        <ScrollArea
            type='hover'
            scrollbarSize={10}
            scrollHideDelay={1500}
            sx={{
                height: '100vh',
            }}
        >
            <Container
                size={size}
                className={'Body'}
                sx={{
                    marginTop: 'var(--header-h)',
                    position: 'relative',
                    paddingBlock: '3rem',
                }}
                {...props}
            >
                {children}
            </Container>
        </ScrollArea>
    );
};

export default Body;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
