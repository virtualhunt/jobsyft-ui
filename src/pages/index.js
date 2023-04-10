import Header from "../components/Header"
import Hero from "../components/Hero"
import Listing from "../components/Listing"
import Footer from "../components/Footer"

var axios = require('axios');

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

  var config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${process.env.DB_URL}/api/v1/jobs?limit=5&skip=0`,
    headers: {}
  };

  const allJobs = await axios(config)

  return {
    props: {
      jobsData: allJobs.data
    }
  }
}