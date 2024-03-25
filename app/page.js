import api_url from "./_utils/apiurl";
import DoctorList from "./_components/home/DoctorList";
import Hero from "./_components/home/Hero";
import SearchAndCategory from "./_components/home/SearchAndCategory";

async function getData() {
  const res = await fetch(`${api_url}/api/doctor/home-data`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
export default async function Home() {
  const { data } = await getData()
  console.log(data)
  return (
    <main className="mx-4 md:w-10/12 md:mx-auto space-y-5">
      <Hero/>
      <SearchAndCategory/>
      <DoctorList {...{doctors : data.doctors}}/>


    </main>
  );
}
