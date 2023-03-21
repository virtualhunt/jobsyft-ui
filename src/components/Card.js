import { Card, CardBody, Text, Stack, Heading, Avatar } from "@chakra-ui/react"
import Link from "next/link";
const { FaGlobeAmericas, FaSuitcase, FaMoneyBill } = require('react-icons/fa');

const getLocations = (locations = []) => {
    let string = ""
    locations.map((item) => {
        string += `${item}, `
    })
    return string.slice(0, -2)
}
export default function CardComponent({ job }) {
    const locations = getLocations(job.location)
    return (
        <Link href={`/job/${job.slug}`} target={"_blank"}>
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
                        src='/logo/company.png'
                    />
                </div>

                <Stack>
                    <CardBody
                        style={{ lineHeight: "1.5rem" }}
                        width={{ base: '200%', md: 'inline-flex' }}
                    >
                        <Text py='2'>
                            {job.companyName}
                        </Text>
                        <Heading size='md'>{job.jobTitle}</Heading>
                        <Text py='2' style={{
                            display: "flex"
                        }}>
                            {locations.length && <>
                                <FaGlobeAmericas style={{
                                    marginTop: "5px",
                                    marginRight: "5px"
                                }} />
                                {locations} </>}
                            {
                                (job.location && job.experience)
                                && <> | </>
                            }
                            {job.experience && <>
                                <FaSuitcase style={{
                                    marginTop: "5px",
                                    marginRight: "5px",
                                    marginLeft: "5px"
                                }} />
                                {job.experience}</>}
                            {
                                ((job.experience && job.salary) || (!job.experience && job.salary && job.location))
                                && <> | </>
                            }
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
