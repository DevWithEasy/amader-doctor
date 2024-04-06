import api_url from "../_utils/apiurl"
import Doctor from "../_components/home/Doctor"
import Pagination from "../_components/Pagination"
import Specializations from "../_components/doctors/Specializations"

async function getData() {
    const randomParam = Math.random().toString(36).substring(7)
    const res = await fetch(`${api_url}/api/doctor/home-data?${randomParam}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Doctors() {
    const { data: { total, doctors, specializations } } = await getData()

    return (
        <main className="h-[calc(100vh-60px)] flex justify-between">
            <Specializations {...{specializations}}/>

            <div
                className="h-[calc(100vh-60px)] w-10/12 px-4 pt-2 space-y-3 overflow-y-auto"
            >
                <h2
                    className="text-xl font-semibold"
                >
                    জনপ্রিয় ডাক্তারগণঃ
                </h2>
                <div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {
                        doctors.map(doctor =>
                            <Doctor key={doctor._id} {...{ doctor }} />
                        )
                    }
                </div>
                <Pagination {...{total, page : 1}}/>
            </div>
        </main>
    );
}