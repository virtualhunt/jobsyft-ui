import Head from 'next/head';
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
} from '@chakra-ui/react';

import Card from "./Card"

export default function List({ jobsData }) {
    console.log(jobsData, "jobs")
    return (
        <Box
        width={{ base: "60%", sm: '80%', md: '80%' }}
        margin={'auto'}>
        <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'200%'}>
            <Text as={'span'} color={'gray.600'}>
                Jobs
            </Text>
        </Heading>
        {
            jobsData.map((item) => {
                return (<div style={{
                    marginBottom: "1rem"
                }}>
                    <Card job={item}/>
                </div>)
            })
        }
        </Box>
    );
}
