'use client'
import useUserStore from '@/app/_store/userStore';
import handleChange from '@/app/_utils/handleChange';
import { selectedDay } from '@/app/_utils/selectedDay';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import {useToast} from '@chakra-ui/react'

export default function AppointmentForm({ doctor }) {
    const toast = useToast()
    const { user } = useUserStore()
    const { chambers } = doctor
    const [chamber, setChamber] = useState({})
    const [value, setValue] = useState({
        patientName: user?.name,
        age: '',
        gender: user?.gender,
        patientPhone: user?.phone,
        doctor: doctor?._id,
        chamberId: '',
        appointmentDay: '',
        appointmentDate: '',
    })

    return (
        <div>
            <div className='w-full bg-white rounded-md'>
                {/* <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    className='border rounded-md'
                /> */}

                <div
                className='p-2 space-y-2'
                >
                    <div className="space-y-1">
                        <label>অ্যাপয়েন্টমেন্ট তারিখঃ </label>
                        <input type='date' name='date' value={value?.patientName} onChange={(e) => selectedDay(e,value,setValue,chambers,setChamber,toast)} className='w-full p-2 border rounded focus:outline-blue-500' />
                    </div>
                    <div className="space-y-1">
                        <label>রোগীর নামঃ  </label>
                        <input type='text' name='patientName' value={value?.patientName} onChange={(e) => handleChange(e, value, setValue)} className='w-full p-2 border rounded focus:outline-blue-500' />
                    </div>
                    <div className=" space-y-1">
                        <label>রোগীর বয়সঃ  </label>
                        <input type='text' name='age' value={value?.age} onChange={(e) => handleChange(e, value, setValue)} className='w-full p-2 border rounded focus:outline-blue-500' />
                    </div>
                    <div>
                        <label className='block'>রোগীর লিঙ্গঃ  </label>
                        <select name='gender' value={value?.gender} onChange={(e) => handleChange(e, value, setValue)} className='w-full p-2 border rounded focus:outline-blue-500'>
                            <option value="Male">পুরুষ</option>
                            <option value="Female">মহিলা</option>
                            <option value="Others">অন্যান্য</option>
                        </select>
                    </div>
                    <div className=" space-y-1">
                        <label>রোগীর মোবাইল নাম্বারঃ </label>
                        <input type='text' name='patientPhone' value={value?.patientPhone} onChange={(e) => handleChange(e, value, setValue)} className='w-full p-2 border rounded focus:outline-blue-500' />
                    </div>
                    <div>
                        <button
                            className='px-4 py-2 bg-blue-500 text-white rounded-md'
                        >
                            সাবমিট করুন
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
