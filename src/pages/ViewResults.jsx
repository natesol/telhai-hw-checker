import { Link } from 'react-router-dom';

import { Title, Paper, Group, Box, Text } from '@mantine/core';
import { Prism } from '@mantine/prism';

import { Section, FileTree } from '../components';

export const ViewResults = () => {
    const sample = `
# api.py
from flask import Flask, request, jsonify

app = Flask(__name__)

countries = [
    {"id": 1, "name": "Thailand", "capital": "Bangkok", "area": 513120},
    {"id": 2, "name": "Australia", "capital": "Canberra", "area": 7617930},
    {"id": 3, "name": "Egypt", "capital": "Cairo", "area": 1010408},
]

def _find_next_id():
    return max(country["id"] for country in countries) + 1

@app.get("/countries")
def get_countries():
    return jsonify(countries)

@app.post("/countries")
def add_country():
    if request.is_json:
        country = request.get_json()
        country["id"] = _find_next_id()
        countries.append(country)
        return country, 201
    return {"error": "Request must be JSON"}, 415
    `;
    return (
        <>
            <Section>
                <Title>ViewResults</Title>
            </Section>

            <Section>
                <Paper shadow='sm' p='md'>
                    <Title order={4} pb='lg'>
                        Homework Check Results:
                    </Title>
                    <Group position='apart' align='flex-start'>
                        <FileTree>
                            <FileTree.Folder name='api' open>
                                <FileTree.File name='my-api.py' />
                            </FileTree.Folder>
                            <FileTree.Folder name='src' open>
                                <FileTree.Folder name='Components'>
                                    <FileTree.File name='Modal.js' />
                                    <FileTree.File name='Modal.css' />
                                </FileTree.Folder>
                                <FileTree.File name='index.js' />
                                <FileTree.File name='index.html' />
                            </FileTree.Folder>
                            <FileTree.File name='package.json' />
                        </FileTree>
                        <Box direction='column' sx={{ width: '65%', position: 'relative' }}>
                            <FileTree.File
                                name='my-api.py'
                                style={{ position: 'absolute', zIndex: '1', top: '1rem' }}
                            />
                            <Prism
                                withLineNumbers
                                noCopy
                                language='python'
                                styles={{
                                    code: {
                                        padding: '3rem 1rem',
                                    },
                                }}
                            >
                                {sample}
                            </Prism>
                        </Box>
                    </Group>
                </Paper>
            </Section>
        </>
    );
};

export default ViewResults;
