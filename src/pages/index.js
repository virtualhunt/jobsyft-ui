import Header from "../components/Header"
import Hero from "../components/Hero"
import Listing from "../components/Listing"
import Footer from "../components/Footer"

// var axios = require('axios');

export default function Home({ jobsData }) {
  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#eeeff7" }}>
        <Hero />
      </div>
      <Listing jobsDataArr={jobsData} />
      <Footer />
    </>
  )
}
export async function getServerSideProps(context) {
console.time("JOB_API")
console.log(`${process.env.DB_URL}/api/v1/jobs?limit=5&skip=0`, "_URL_")
  // var config = {
  //   method: 'get',
  //   maxBodyLength: Infinity,
  //   url: `${process.env.DB_URL}/api/v1/jobs?limit=5&skip=0`,
  //   headers: {}
  // };

  // const allJobs = await axios(config)
  let allJobs = await fetch(`${process.env.DB_URL}/api/v1/jobs?limit=5&skip=0`)
  allJobs = await allJobs.json()
  console.timeEnd("JOB_API")
  return {
    props: {
      jobsData: allJobs
    }
  }
}