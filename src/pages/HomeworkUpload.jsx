import { Link } from 'react-router-dom';

import { Group, Title, Paper, Text, useMantineTheme } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

import { Upload, Photo, X, Icon as TablerIcon } from 'tabler-icons-react';

import { Section } from '../components';

function getIconColor(status, theme) {
    return status.accepted
        ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]
        : status.rejected
        ? theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7];
}

function ImageUploadIcon({ status, ...props }) {
    if (status.accepted) {
        return <Upload {...props} />;
    }

    if (status.rejected) {
        return <X {...props} />;
    }

    return <Photo {...props} />;
}

export const dropzoneChildren = (status, theme) => (
    <Group position='center' spacing='xl' style={{ minHeight: 220, pointerEvents: 'none' }}>
        <ImageUploadIcon status={status} style={{ color: getIconColor(status, theme) }} size={80} />

        <div>
            <Text size='xl' inline>
                Drag your files here or click to select files
            </Text>
            <Text size='sm' color='dimmed' inline mt={7}>
                Attach as many files as you like, each file should not exceed 5mb
            </Text>
        </div>
    </Group>
);

export const HomeworkUpload = () => {
    const theme = useMantineTheme();

    return (
        <>
            <Section>
                <Title>HomeworkUpload</Title>
            </Section>

            <Section>
                <Paper shadow='sm' p='md'>
                    <Dropzone
                        onDrop={(files) => console.log('accepted files', files)}
                        onReject={(files) => console.log('rejected files', files)}
                        maxSize={3 * 1024 ** 2}
                        accept={IMAGE_MIME_TYPE}
                    >
                        {(status) => dropzoneChildren(status, theme)}
                    </Dropzone>
                </Paper>
            </Section>
        </>
    );
};

export default HomeworkUpload;
