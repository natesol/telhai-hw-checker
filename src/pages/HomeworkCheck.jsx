import { Link } from 'react-router-dom';

import { Title, Paper, Group, Text } from '@mantine/core';
import { Prism } from '@mantine/prism';

import { Section } from '../components';

export const HomeworkCheck = () => {
    const results = `
HW Check Results:

Test 1:
1.1: Passed
1.2: Passed
1.3: Passed
1.4: Failed

Test 2:
2.1: Passed
2.2: Failed
2.3: Passed
2.4: Passed

Test 3:
3.1: Passed
3.2: Passed
3.3: Passed
3.4: Passed

    `;
    return (
        <>
            <Section>
                <Title>HomeworkCheck</Title>
            </Section>

            <Section>
                <Paper shadow='sm' p='md'>
                    <Title order={4} pb='lg'>
                        Homework Check Results:
                    </Title>
                    <Prism
                        withLineNumbers
                        styles={(theme) => ({
                            code: { padding: theme.spacing.md },
                        })}
                        highlightLines={{
                            7: { color: 'red' },
                            11: { color: 'red' },
                        }}
                        language='js'
                    >
                        {results}
                    </Prism>
                </Paper>
            </Section>
        </>
    );
};

export default HomeworkCheck;
