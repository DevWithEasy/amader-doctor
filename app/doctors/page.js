import api_url from "../_utils/apiurl";
import Image from 'next/image'
import Link from 'next/link'
import Doctor from "../_components/home/Doctor";
import Pagination from "../_components/Pagination";

async function getData() {
    const randomParam = Math.random().toString(36).substring(7);
    const res = await fetch(`${api_url}/api/doctor/home-data?${randomParam}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}
export default async function Doctors() {
    const { data: { total, doctors, specializations } } = await getData()

    return (
        <main className="h-[calc(100vh-60px)] flex justify-between">
            <div
                className="h-[calc(100vh-60px)] w-2/12 p-2 border-r space-y-3 overflow-y-auto"
            >
                <form>
                    <input
                        placeholder="ডাক্তার খুঁজুন (নাম,অভিজ্ঞতা) দিয়ে"
                        className="w-full p-2 border rounded focus:outline-blue-500 placeholder:text-sm"
                    />
                </form>
                <p
                    className="border-b px-4"
                >
                    অভিজ্ঞতাঃ
                </p>
                <div>
                    {specializations &&
                        specializations.map(s =>
                            <Link
                                key={s._id}
                                href={`/doctors/search/${s._id}`}
                                className="px-4 py-2 flex items-center space-x-3 hover:bg-blue-200 transition-all duration-300 rounded-md"
                            >
                                <Image
                                    src='/image/brain.png'
                                    alt={s.name}
                                    width={25}
                                    height={25}
                                    className=""
                                />
                                <span className="text-blue-600">{s.name}</span>
                            </Link>
                        )
                    }
                </div>

            </div>
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
                <Pagination {...{total}}/>
            </div>
        </main>
    );
}