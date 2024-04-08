import api_url from "@/app/_utils/apiurl";

async function getData(specialization,day) {
    const randomParam = Math.random().toString(36).substring(7);
    const res = await fetch(`${api_url}/api/doctor/find?specialization=${specialization}&day=${day}&?${randomParam}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function Page({ searchParams }) {
    const { specialization, day } = searchParams
    const data = await getData(specialization, day)
    console.log(data)
    return (
        <div>Find</div>
    )
}
