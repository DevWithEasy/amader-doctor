'use client'
import api_url from "@/app/_utils/apiurl"
import axios from "axios"
import { toBengaliNumber } from 'bengali-number'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import useServiceStore from "@/app/_store/serviceStore"
import UserDetails from "@/app/_components/details/UserDetails"
import Loading from "@/app/_components/Loading"
import Heading from "@/app/_components/Heading"

export default function Users() {
    const router = useRouter()
    const { users, addUsers, process, processing } = useServiceStore()
    const [view, setView] = useState(false)
    const [id, setId] = useState('')
    async function getAllUsers() {
        processing(true)
        try {
            const res = await axios.get(`${api_url}/api/admin/getAllUsers`, {
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            })
            if (res.data.status === 200) {
                addUsers(res.data.data)
                processing(false)
            }
        } catch (error) {
            console.log(error)
            processing(false)
        }
    }
    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <div>
            <Heading>
                ব্যবহারকারী
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
                <div
                    className="overflow-x-2"
                >
                    <table className="w-full">
                        <thead className="bg-gray-300">
                            <tr className="text-center font-semibold">
                                <td className="p-1">নং</td>
                                <td className="p-1">নাম </td>
                                <td className="p-1">ই-মেইল </td>
                                <td className="p-1">মোবাইল </td>
                                <td className="p-1 text-center hidden md:block">ধরণ </td>
                                <td className="p-1">পদক্ষেপ</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users && users.map((user, i) =>
                                    <tr key={i} className='border-b'>
                                        <td className="p-1 text-center">{toBengaliNumber(i + 1)}</td>
                                        <td className="p-1 text-center">{user?.name}</td>
                                        <td className="p-1 text-center">{user?.email}</td>
                                        <td className="p-1 text-center">{toBengaliNumber(user?.phone)}</td>
                                        <td className="p-1 text-center hidden md:block">
                                            {user?.isAdmin ? 'এডমিন' : user?.isDoctor ? 'ডাক্তার' : user?.isHospital ? 'হাসপাতাল' : 'ব্যবহারকারী'}
                                        </td>
                                        <td className="p-1 text-center space-x-2">
                                            <button onClick={() => router.push(`/admin/users/${user?._id}`)}
                                                className="px-2 py-1 bg-green-500 text-white rounded-md"
                                            >
                                                বিস্তারিত
                                            </button>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {view &&
                <UserDetails {...{ id, view, setView }} />
            }
            {process && <Loading />}
        </div>
    )
}