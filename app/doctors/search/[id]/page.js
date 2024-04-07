import Specializations from '@/app/_components/doctors/Specializations'
import Doctor from '@/app/_components/home/Doctor';
import api_url from '@/app/_utils/apiurl'
import { toBengaliNumber } from 'bengali-number'
import Image from 'next/image'

async function getData(id) {
    const randomParam = Math.random().toString(36).substring(7);
    const res = await fetch(`${api_url}/api/doctor/search/${id}?${randomParam}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function SpecialistDoctors({ params }) {
    const { data: { doctors, specializations } } = await getData(params.id)
    const specialization = specializations.find(s => s._id === params.id)

    return (
        <main className="h-[calc(100vh-60px)] flex justify-between">
            <Specializations {...{ specializations }} />
            <div
                className="h-[calc(100vh-60px)] w-10/12 px-4 pt-2 space-y-3 overflow-y-auto"
            >
                {
                    doctors.length > 0 ?
                        <div
                            className='space-y-3'
                        >
                            <div>
                                <h2
                                    className='text-xl'
                                >
                                    {specialization?.name} বিভাগের ডাক্তারগণঃ
                                </h2>
                                <p>
                                    <span className='text-blue-500 text-xl'>{toBengaliNumber(doctors.length)}</span>
                                    <span className='text-gray-500 text-sm pl-2'>ডাক্তার খুজে পাওয়া গেছে।</span>
                                </p>
                            </div>
                            <div
                                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                            >
                                {
                                    doctors.map(doctor =>
                                        <Doctor key={doctor._id} {...{ doctor }} />
                                    )
                                }
                            </div>
                        </div>
                        :
                        <div
                            className='h-[calc(100vh-68px)] flex justify-center items-center'
                        >
                            <div
                                className='flex flex-col items-center text-center'
                            >
                                <Image
                                    src='/image/brain.png'
                                    alt='doctor-not-found'
                                    height={150}
                                    width={150}
                                    className=''
                                />
                                <div
                                    className='pt-5'
                                >
                                    <p className='text-xl text-blue-500 font-bold'>{specialization?.name}</p>
                                    <p className='text-red-500'>বিভাগের কোন ডাক্তার খুঁজে পাওয়া যায়নি</p>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </main>
    )
}
