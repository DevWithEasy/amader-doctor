'use client'
import axios from "axios"
import { useEffect, useState } from "react"
import { toBengaliNumber } from "bengali-number"
import { useRouter } from "next/navigation"
import useServiceStore from "@/app/_store/serviceStore"
import useUserStore from "@/app/_store/userStore"
import api_url from "@/app/_utils/apiurl"
import Heading from "@/app/_components/Heading"
import DoctorDetails from "@/app/_components/details/DoctorDetails"
import Delete from "@/app/_components/Delete"
import Loading from "@/app/_components/Loading"
import Link from 'next/link'

export default function AppliedDoctors() {
    const router = useRouter()
    const [id, setId] = useState('')
    const [view, setView] = useState(false)
    const [deleteView, setDeleteView] = useState(false)
    const { random, reload } = useUserStore()
    const { doctors, addDoctors, process, processing } = useServiceStore()

    async function getAppliedDoctors() {
        processing(true)
        try {
            const res = await axios.get(`${api_url}/api/admin/getAlldoctors`, {
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            })
            addDoctors(res.data.data)
            processing(false)
        } catch (error) {
            processing(false)
        }
    }

    async function approvedDoctor(id) {
        try {
            const res = await axios.post(`${api_url}/api/doctor/approve/${id}`, {}, {
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            })
            if (res.data.status === 200) {
                console.log(res.data)
                reload()
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function cancelDoctor(id) {
        try {
            const res = await axios.post(`${api_url}/api/doctor/cancel/${id}`, {}, {
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            })
            if (res.data.status === 200) {
                console.log(res.data)
                reload()
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAppliedDoctors()
    }, [random])
    return (
        <div>
            <Heading>
                ডাক্তারগণ
            </Heading>
            <div
                className="p-2"
            >
                <div
                    className="flex justify-end mb-2"
                >
                    <input
                        onChange={() => { }}
                        className="w-full md:w-4/12 p-1 border rounded focus:outline-blue-500"
                        placeholder="সার্চ করুন - নাম /ইমেইল /মোবাইল /ধরন"
                    />
                </div>
                <table className="w-full">
                    <thead className="bg-gray-300">
                        <tr className="text-center font-semibold">
                            <td className="p-1">নং </td>
                            <td className="p-1">নাম </td>
                            <td className="p-1">অভিজ্ঞতা</td>
                            <td className="p-1">সার্ভিস চার্জ</td>
                            <td className="p-1">অবস্থা</td>
                            <td className="p-1">পদক্ষেপ</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors && doctors.map((doctor, i) =>
                                <tr key={i} className='border-b'>
                                    <td className="p-1 text-center">{toBengaliNumber(i + 1)}</td>
                                    <td className="p-1 text-center">{doctor?.name}</td>
                                    <td className="p-1 text-center">{doctor?.specialization?.name}</td>
                                    <td className="p-1 text-center">{doctor?.feesPerConsultation}</td>
                                    <td className="p-2 text-center">
                                        {
                                            doctor?.status === 'Pending' ? 'অপেক্ষমাণ ' :
                                                doctor?.status === 'Approved' ? 'অনুমোদিত' : 'বাতিল'
                                        }
                                    </td>
                                    <td className="p-1 text-center space-x-2">
                                        {doctor?.status === 'Pending' &&
                                            <button
                                                onClick={() => approvedDoctor(doctor._id)}
                                                className="p-1 bg-green-500 text-white rounded hover:bg-green-600"
                                            >
                                                অনুমোদন
                                            </button>
                                        }
                                        {doctor?.status === 'Pending' &&
                                            <button
                                                onClick={()=>cancelDoctor(doctor?._id)}
                                                className='p-1 bg-red-500 text-white rounded'
                                            >
                                                বাতিল
                                            </button>}
                                        <Link
                                            href={`/admin/doctors/${doctor?._id}`}
                                            className="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                                        >
                                            বিস্তারিত
                                        </Link>

                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {view &&
                <DoctorDetails {...{ id, view, setView }} />
            }
            {deleteView &&
                <Delete {...{ path: '', deleteView, setDeleteView }} />
            }
            {process && <Loading />}
        </div>
    )
}