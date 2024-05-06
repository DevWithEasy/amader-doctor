import AppointmentFind from "@/app/_components/appointment/AppointmentFind";
import Doctor from "@/app/_components/home/Doctor";
import Search from "@/app/_components/home/Search";
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
    let data
    if(specialization && day){
        data = await getData(specialization, day)
    }
    console.log(data)
    return (
        <div
            className="pt-2 pb-16"
        >
            <AppointmentFind/>

            {data?.length === 0 ?
                <div>
                    কোন ডাক্তার খুঁজে পাওয়া যায়নি।
                </div>
            :
                <div>
                                <div
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
                {
                    data?.map(doctor =>
                        <Doctor key={doctor._id} {...{ doctor }} />
                    )
                }
            </div>
                </div>
            }
        </div>
    )
}
