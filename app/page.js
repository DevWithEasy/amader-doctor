import api_url from "./_utils/apiurl";
import DoctorList from "./_components/home/DoctorList";
import Hero from "./_components/home/Hero";
import SearchAndCategory from "./_components/home/SearchAndCategory";

async function getData() {
  const randomParam = Math.random().toString(36).substring(7);
  const res = await fetch(`${api_url}/api/doctor/home-data?${randomParam}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const { data: { doctors, specializations } } = await getData()

  return (
    <main className="pb-10 mx-4 md:w-10/12 md:mx-auto space-y-5">
      <Hero />
      <SearchAndCategory {...{ specializations }} />
      <DoctorList {...{ doctors }} />
    </main>
  );
}
