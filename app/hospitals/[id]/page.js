'use client'
import axios from 'axios'
import { toBengaliNumber } from 'bengali-number'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import api_url from '@/app/_utils/apiurl'
import HospitalDoctor from '@/app/_components/HospitalDoctor'
import MapViewDirection from '@/app/_components/MapViewDirection'
import useServiceStore from '@/app/_store/serviceStore'
import getVanueTypeBangla from '@/app/_utils/vanueTypeBangla'

export default function HospitalDetails() {
    const [view, setView] = useState(false)
    const { hospitals } = useServiceStore()
    const { id } = useParams()
    const [doctors,setDoctors] = useState([])
    const hospital = hospitals.find(hospital => hospital._id === id)

    async function getHospitalDoctors() {
        try {
            const res = await axios.get(`${api_url}/api/vanue/doctors/${id}`, {
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            })
            if (res.data.success) {
                console.log(res.data)
                setDoctors(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getHospitalDoctors()
    }, [])
    
    return (
        <div className='space-y-2 '>
            <div
                className='relative h-[350px] w-full flex justify-center items-center bg-blue-50 rounded-md'>
                <div
                    className='flex flex-col items-center space-y-2'
                >
                    <h1 className='text-4xl font-extrabold text-blue-500 rounded-md'>
                        {hospital?.name}
                    </h1>
                    <p>{hospital?.location}</p>
                    <p
                        className='px-4 py-1 bg-blue-500 text-white text-sm rounded-full'
                    >
                        {getVanueTypeBangla(hospital?.type)}
                    </p>
                    <div
                        className='flex items-center space-x-4 py-2'
                    >
                        <p>
                            <span>খোলার সময়ঃ </span>
                            <span
                                className='font-semibold'
                            >
                                {toBengaliNumber(hospital?.open)}
                            </span>
                        </p>
                        <p>
                            <span>বন্ধের সময়ঃ </span>
                            <span
                                className='font-semibold'
                            >
                                {toBengaliNumber(hospital?.close)}
                            </span>
                        </p>
                    </div>
                    <button
                        onClick={()=>setView(!view)}
                        className='px-4 py-2 border border-blue-500 rounded'
                    >
                        আপনার দুরত্ব দেখুন
                    </button>
                </div>

            </div>

            <div className='space-y-2'>
                <h3 className='p-2 text-center text-xl font-semibold border-b-4'>
                    ডাক্তারের তালিকা
                </h3>
                <div className='mx-2 md:w-10/12 md:mx-auto grid md:grid-cols-3 md:gap-4 space-y-3 md:space-y-0'>
                    {doctors.length > 0 &&
                        doctors.map(doctor=>
                            <HospitalDoctor
                                key={doctor?._id}
                                {...{chamber : doctor}}
                            />
                        )
                    }
                </div>
            </div>

            {view &&
                <MapViewDirection {...{
                    view, setView,
                    hospital
                }} />
            }
        </div>
    )
}
