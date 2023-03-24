import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Box, Heading, Container, VStack, Tag, Center, Button } from "@chakra-ui/react"
import { useState } from 'react'
import Link from 'next/link'
const { FaGlobeAmericas, FaSuitcase, FaMoneyBill, FaRulerCombined, FaBookOpen, FaExternalLinkAlt } = require('react-icons/fa');

var axios = require('axios');

const getEducation = (education) => {
    if(education){
        let {ug, pg, ppg} = education
        if(ug || pg || ppg){
            return [...ug, ...pg, ...ppg]
        }else{
            return []
        }
    }else{
        return []
    }
}

export default function Home({ jobData }) {
    const [education, setEducation] = useState(getEducation(jobData?.education))
    return (
        <>
            <Header />
            <Container maxW="3xl" borderWidth='1px' borderRadius='lg' margin={"auto"} marginY={"2rem"}>
                <VStack
                    spacing={3}
                    align='stretch'
                    marginTop={"1rem"}
                    padding={"1rem"}
                >
                    <Center as='h1'>
                        <Heading size="lg">
                            {jobData.jobTitle}
                        </Heading>
                    </Center>
                    <Center as='h1'>
                        <Heading size="sm">
                            {jobData.companyName}
                        </Heading>
                    </Center>
                    {jobData?.location?.length && <Box h='30px' display={"inline-flex"}>
                        <FaGlobeAmericas style={{
                            marginTop: "2px",
                            marginRight: "10px",
                            height: "25px",
                            width: "25px"
                        }}
                        />
                        {jobData.location.map((item, i) => {
                            return <Tag style={{
                                marginRight: "0.3rem"
                            }}
                            key={i}>{item}</Tag>
                        })}
                    </Box>}
                    {(jobData.experience || jobData.employmentType) && <Box h='30px' display={"inline-flex"}>
                        <FaSuitcase style={{
                            marginTop: "2px",
                            marginRight: "10px",
                            height: "25px",
                            width: "25px"
                        }} />
                        {jobData.experience && <Tag style={{
                            marginRight: "0.3rem"
                        }}>
                            {jobData.experience}
                        </Tag>}
                        {jobData.employmentType && <Tag>
                            {jobData.employmentType}
                        </Tag>}
                    </Box>}
                    {jobData.salary && <Box h='30px' display={"inline-flex"}>
                        <FaMoneyBill style={{
                            marginTop: "2px",
                            marginRight: "10px",
                            height: "25px",
                            width: "25px"
                        }} />
                        <Tag>
                            {jobData.salary}
                        </Tag>
                    </Box>}
                    {jobData?.skills?.length && <Box h='30px' display={"inline-flex"}>
                        <FaRulerCombined style={{
                            marginTop: "2px",
                            marginRight: "10px",
                            height: "25px",
                            width: "25px"
                        }} />
                        {jobData.skills.map((item, i) => {
                            return <Tag style={{
                                marginRight: "0.3rem"
                            }}
                            key={i}>{item}</Tag>
                        })}
                    </Box>}
                    {education?.length && <Box h='30px' display={"inline-flex"}>
                        <FaBookOpen style={{
                            marginTop: "2px",
                            marginRight: "10px",
                            height: "25px",
                            width: "25px"
                        }} />
                        {education.map((item, i) => {
                            return <Tag style={{
                                marginRight: "0.3rem"
                            }}
                            key={i}>{item}</Tag>
                        })}
                    </Box>}
                    {jobData.jobDescription && <Box>
                        <p dangerouslySetInnerHTML={{ __html: jobData.jobDescription }} style={{
                            marginTop: "2rem"
                        }}></p>
                    </Box>}
                    <Center>
                        <Link href={jobData.jdUrl} target="_blank">
                            <Button rightIcon={<FaExternalLinkAlt />} colorScheme='teal' variant='outline'>
                                Apply Now
                            </Button>
                        </Link>
                    </Center>
                </VStack>
            </Container>
            <Footer />
        </>
    )
}
export async function getServerSideProps(context) {
    try {
        const { slug } = context.params

        var config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${process.env.DB_URL}/api/v1/jobs/${slug}`,
            headers: {}
        };

        const jobDataRes = await axios(config)
        if(jobDataRes){
            return {
                props: {
                    jobData: jobDataRes.data
                }
            }
        }
    } catch (err) {
        console.log(err, "[ERR - slug page]")
        return {
            notFound: true,
        }
    }
}
