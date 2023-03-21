import { Card, Wrap, WrapItem, CardBody, CardFooter, Text, Stack, Heading, Avatar, Button } from "@chakra-ui/react"

export default function CardComponent({ job }) {
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >

            <div style={{
                margin: "auto",
                marginLeft: "1rem",
            }}>
                <Avatar
                    display={{ base: 'none', md: 'inline-flex' }}
                    size='lg'
                    name='Prosper Otemuyiwa'
                    src='https://bit.ly/prosper-baba'
                />
            </div>

            <Stack>
                <CardBody
                    style={{ lineHeight: "1.5rem" }}
                >
                    <Heading size='md'>{job.title}</Heading>
                    <Heading as='h5' size='sm'>
                        {job.company} | {job.location} | {job.experience} | {job.salary}
                    </Heading>
                    <Text py='2'>
                        {job.jobDescription}
                    </Text>
                </CardBody>

                {/* <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                        Buy Lattes
                    </Button>
                </CardFooter> */}
            </Stack>
        </Card>
    )
}
