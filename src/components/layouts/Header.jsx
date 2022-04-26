/* ------------------------------------------------------------------------------------------------ */
/* ---- React Component - App Header -------------------------------------------------------------- */

import { Link } from 'react-router-dom';

import { useToggle } from '@mantine/hooks';
import {
    useMantineColorScheme,
    useMantineTheme,
    Anchor,
    Container,
    Group,
    Text,
    Modal,
    Button,
    Switch,
} from '@mantine/core';

import { Logo, ThemeSwitch } from '../../components';

export const Header = ({ size = 'xs' }) => {
    const theme = useMantineTheme();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    const [showModal, setShowModal] = useToggle(false, [false, true]);

    return (
        <>
            <header
                className={`Header`}
                style={{
                    backgroundColor: theme.colors[theme.primaryColor][6],
                }}
            >
                <Container size={size} sx={{ height: '100%' }}>
                    <Group position='apart' sx={{ height: '100%', alignContent: 'center' }}>
                        <Logo to='/' />
                        <Group>
                            <Anchor component={Link} size='xs' variant='dimmed' to='/'>
                                upload
                            </Anchor>
                            <Anchor component={Link} size='xs' variant='dimmed' to='/check'>
                                check
                            </Anchor>
                            <Anchor component={Link} size='xs' variant='dimmed' to='/results'>
                                results
                            </Anchor>
                        </Group>
                        <ThemeSwitch />
                    </Group>
                </Container>
            </header>

            <Modal
                opened={showModal}
                onClose={() => setShowModal(false)}
                title={<>Log Out?</>}
                overflow='inside'
                centered
                size='xl'
            >
                <Text>Are you sure you want to log out of your account?</Text>
                <Group>
                    <Button onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button onClick={() => {}}>Logout</Button>
                </Group>
            </Modal>
        </>
    );
};

export default Header;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
