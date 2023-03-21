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

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            {/* Get Your Dream Job Here <br /> */}
            <Text as={'span'} color={'green.400'}>
            Get Your Dream Job Here
            </Text>
          </Heading>
          <Text color={'gray.900'}>
            We are the world's largest aggregator of job aggregators.
          </Text>
        </Stack>
      </Container>
    </>
  );
}