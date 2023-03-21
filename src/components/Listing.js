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
        margin={'auto'}
        marginTop={"2rem"}>
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
