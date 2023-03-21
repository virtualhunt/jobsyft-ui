import { Card, Wrap, WrapItem, CardBody, CardFooter, Text, Stack, Heading, Avatar, Button } from "@chakra-ui/react"
import Link from "next/link";
const { FaGlobeAmericas, FaSuitcase, FaMoneyBill } = require('react-icons/fa');

export default function CardComponent({ job }) {
    return (
        <Link href={job.jdUrl} target={"_blank"}>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >

                <div style={{
                    margin: "auto",
                    marginLeft: "1rem",
                    marginRight: "1rem",
                    width: "10%"
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
                        <Text py='2'>
                            {job.company}
                        </Text>
                        <Heading size='md'>{job.title}</Heading>
                        <Text py='2' style={{
                            display: "flex"
                        }}>
                            {job.location && <>
                                <FaGlobeAmericas style={{
                                    marginTop: "5px",
                                    marginRight: "5px"
                                }} />
                                {job.location} |</>}
                            {job.experience && <>
                                <FaSuitcase style={{
                                    marginTop: "5px",
                                    marginRight: "5px",
                                    marginLeft: "5px"
                                }} />
                                {job.experience} | </>}
                            {job.salary && <>
                                <FaMoneyBill style={{
                                    marginTop: "5px",
                                    marginRight: "5px",
                                    marginLeft: "5px"
                                }} />
                                {job.salary}</>}
                        </Text>
                    </CardBody>
                    {/* ,  */}
                </Stack>
            </Card>
        </Link>
    )
}
