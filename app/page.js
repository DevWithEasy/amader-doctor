import api_url from "./_utils/apiurl";
import DoctorList from "./_components/home/DoctorList";

async function getData() {
  const res = await fetch(`${api_url}/api/doctor/allApprovedDoctors`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
export default async function Home() {
  const { data } = await getData()

  return (
    <main className="pt-2">
      <DoctorList {...{doctors : data}}/>


    </main>
  );
}
