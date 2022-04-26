/* ------------------------------------------------------------------------------------------------ */
/* ---- React App Component ----------------------------------------------------------------------- */

import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

import { PageTemplate } from './components';
import { HomeworkUpload, HomeworkCheck, ViewResults } from './pages';
import { CUSTOM_THEME_BASE, CUSTOM_THEME_FIXES, EMOTION_OPTIONS } from './utilities';

const App = () => {
    const [colorScheme, setColorScheme] = useState('light');
    const toggleColorScheme = (value) => {
        document.documentElement.setAttribute('data-theme', colorScheme);
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', colorScheme);
    }, [colorScheme]);

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
                withNormalizeCSS
                theme={CUSTOM_THEME_BASE(colorScheme)}
                styles={CUSTOM_THEME_FIXES}
                emotionOptions={EMOTION_OPTIONS}
            >
                <NotificationsProvider position='top-right' autoClose={3000}>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<PageTemplate />}>
                                <Route index element={<HomeworkUpload />} />
                                <Route path='check' element={<HomeworkCheck />} />
                                <Route path='results' element={<ViewResults />} />
                                <Route path='*' element={<HomeworkUpload />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </NotificationsProvider>
            </MantineProvider>
        </ColorSchemeProvider>
    );
};

export default App;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
