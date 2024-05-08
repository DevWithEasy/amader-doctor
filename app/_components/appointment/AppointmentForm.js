'use client'
import useServiceStore from '@/app/_store/serviceStore';
import useUserStore from '@/app/_store/userStore';
import { submitAppointment } from '@/app/_utils/appoimtments_utils';
import dateGenerator from '@/app/_utils/dateGenerator';
import handleChange from '@/app/_utils/handleChange';
import { selectedDay } from '@/app/_utils/selectedDay';
import { useToast } from '@chakra-ui/react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import LoginModal from '../LoginModal';
import AppoinmentChamberAlert from './AppoinmentChamberAlert';
import NoBalanceAlert from '../NoBalanceAlert';

export default function AppointmentForm({ doctor }) {
    const toast = useToast()
    const { user } = useUserStore()
    const {addChamber} = useServiceStore()
    const router = useRouter()
    const {id} = useParams()
    const { chambers } = doctor
    const [view, setView] = useState(false)
    const [alertView, setAlertView] = useState(false)
    const [balanceView, setBalanceView] = useState(false)
    const [chamber, setChamber] = useState({})
    const [value, setValue] = useState({
        name: '',
        age: '',
        gender: '',
        phone: '',
        address : '',
        doctor: id
    })
    useEffect(()=>{
        addChamber('')
    },[])
    return (
        <div>
            <div className='w-full bg-white rounded-md'>
                <div
                    className='p-2 space-y-2'
                >
                    <div className="space-y-1">
                        <label>অ্যাপয়েন্টমেন্ট তারিখঃ </label>
                        <input
                            type='date'
                            name='appointmentDate'
                            value={chamber._id ?dateGenerator(chamber?.date) : ''}
                            onChange={(e) => selectedDay(e,addChamber,chambers, setChamber,setAlertView, toast)}
                            className='w-full p-2 border rounded focus:outline-blue-500'
                        />
                    </div>
                    <div className="space-y-1">
                        <label>রোগীর নামঃ  </label>
                        <input
                            type='text'
                            name='name'
                            value={value?.name}
                            onChange={(e) => handleChange(e, value, setValue)} className='w-full p-2 border rounded focus:outline-blue-500'
                        />
                    </div>
                    <div className=" space-y-1">
                        <label>রোগীর বয়সঃ  </label>
                        <input
                            type='text'
                            name='age'
                            value={value?.age}
                            onChange={(e) => handleChange(e, value, setValue)} className='w-full p-2 border rounded focus:outline-blue-500'
                        />
                    </div>
                    <div>
                        <label className='block'>রোগীর লিঙ্গঃ  </label>
                        <select
                            name='gender'
                            value={value?.gender}
                            onChange={(e) => handleChange(e, value, setValue)} className='w-full p-2 border rounded focus:outline-blue-500'
                        >
                            <option value="">বাছাই করুন</option>
                            <option value="Male">পুরুষ</option>
                            <option value="Female">মহিলা</option>
                            <option value="Others">অন্যান্য</option>
                        </select>
                    </div>
                    <div className=" space-y-1">
                        <label>রোগীর ঠিকানাঃ </label>
                        <input
                            type='text'
                            name='address'
                            value={value?.address}
                            onChange={(e) => handleChange(e, value, setValue)} className='w-full p-2 border rounded focus:outline-blue-500'
                        />
                    </div>
                    <div className=" space-y-1">
                        <label>রোগীর মোবাইল নাম্বারঃ </label>
                        <input
                            type='text'
                            name='phone'
                            value={value?.phone}
                            onChange={(e) => handleChange(e, value, setValue)} className='w-full p-2 border rounded focus:outline-blue-500'
                        />
                    </div>
                    <div>
                        <button
                            onClick={() => submitAppointment({
                                user,
                                value: {
                                    ...value,
                                    chamber
                                },
                                toast,
                                router,
                                setView,
                                setBalanceView
                            })}
                            className='px-4 py-2 bg-blue-500 text-white rounded-md'
                        >
                            সাবমিট করুন
                        </button>
                    </div>
                </div>
            </div>
            {
                view && <LoginModal {...{ view, setView }} />
            }
            {
                balanceView && <NoBalanceAlert {...{
                    view : balanceView, 
                    setView : setBalanceView
                }}/>
            }
            {
                alertView && <AppoinmentChamberAlert {...{
                    chamber,
                    view : alertView, 
                    setView : setAlertView
                }}/>
            }
        </div>
    )
}
