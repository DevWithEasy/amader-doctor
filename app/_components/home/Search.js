'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci"
import { useToast } from '@chakra-ui/react'
import dayNameBangla from "@/app/_utils/dayNameBangla";

export default function Search() {
    const toast = useToast()
    const router = useRouter()
    const [specialization, setSpecialization] = useState("")
    const [day, setDay] = useState("")

    const daysOfWeek = [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
    ]

    const handleFind = () => {
        if (specialization === "" || day === "") {
            return toast({
                title: 'সার্চে ব্যর্থ হয়েছেন',
                description: "কোন অভিজ্ঞতা এবং বার নির্বাচন করেন নি।",
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
        } else {
            router.push(
                `/appointment/find?specialization=${specialization}&day=${day}`
            )
        }
    }

    return (
        <div
            className='flex flex-col justify-between items-center'
        >
            <h2
                className='text-2xl font-semibold'
            >
                <span className='text-blue-500'>ডাক্তার</span> খুঁজুন
            </h2>
            <p className="text-gray-500">আপনার ডাক্তার খুজে এক ক্লিকেই অ্যাপয়েন্টমেন্ট নিয়ে নিন</p>
            <div
                className="py-2 flex items-center space-x-2"
            >
                {/* <input
                    type='text'
                    placeholder="নাম লিখুন..."
                    className='px-2 py-1 border focus:outline-blue-500 rounded'
                /> */}
                <select
                    onChange={(e) => setDay(e.target.value)}
                    className="px-2 py-1 border focus:outline-blue-500 rounded"
                >
                    <option>বার বাছাই করুন</option>
                    {daysOfWeek &&
                        daysOfWeek
                            .map((day) => day)
                            .map((day, i) => (
                                <option key={i} value={day}>
                                    {dayNameBangla(day)}
                                </option>
                            ))}
                </select>
                <button
                    onClick={handleFind}
                    className='px-4 py-1.5 flex items-center space-x-2 bg-blue-500 text-white rounded'
                >
                    <CiSearch />
                    <span>খুঁজুন</span>
                </button>
            </div>
        </div>
    )
}
