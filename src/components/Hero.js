import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
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
            <Text as={'span'} color={'#8692c5'}>
            Get Your Dream Job Here
            </Text>
          </Heading>
          <Text color={'#293256'}>
            We are the world&apos;s first aggregator of job aggregators.
          </Text>
        </Stack>
      </Container>
    </>
  );
}