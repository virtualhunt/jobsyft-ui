import Head from 'next/head';
import {
    Box,
} from '@chakra-ui/react';
import { useState } from 'react';
import Card from "./Card"
import InfiniteScroll from "react-infinite-scroll-component";

export default function List({ jobsDataArr }) {
    console.log(jobsDataArr, "jobs")
    const [jobsData, setJobsData] = useState(jobsDataArr);
    const [hasMore, setHasMore] = useState(true);

    const getMoreJobs = async () => {
        console.log(`http://localhost:8007/api/v1/jobs?limit=10&skip=${jobsData.length}`,"URL")
        const res = await fetch(
            `http://localhost:8007/api/v1/jobs?limit=10&skip=${jobsData.length}`
        );
        const newJobsData = await res.json();
        setJobsData((jobsData) => [...jobsData, ...newJobsData]);
    };

    return (
        <Box
            width={{ base: "90%", sm: '80%', md: '80%' }}
            margin={'auto'}
            marginTop={"2rem"}>
            <InfiniteScroll
                dataLength={jobsData.length}
                next={getMoreJobs}
                hasMore={hasMore}
                loader={<h3> Loading...</h3>}
                endMessage={<h4>Nothing more to show</h4>}
            >
                {
                    jobsData.map((item) => {
                        return (<div style={{
                            marginBottom: "1rem"
                        }}>
                            <Card job={item} key={JSON.stringify(jobsData)}/>
                        </div>)
                    })
                }
            </InfiniteScroll>
        </Box>
    );
}
