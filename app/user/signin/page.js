'use client'
import useUserStore from "@/app/_store/userStore"
import handleChange from "@/app/_utils/handleChange"
import passwordView from "@/app/_utils/passwordView"
import { handleSignIn } from "@/app/_utils/users_utils"
import { useToast } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from "react"
import { BsEye, BsEyeSlash } from "react-icons/bs"

export default function Signin() {
    const { addUser,addNotifications } = useUserStore()
    const router = useRouter()
    const toast = useToast()
    const [loading, setLoading] = useState(false)
    const [type, setType] = useState('password')
    const [value, setValue] = useState({
        email: '',
        password: '',
    })

    return (
        <div className="mt-3 w-11/12 md:w-5/12 mx-auto px-4 py-2 border rounded space-y-2 bg-white/50">
            <h1 className="text-2xl font-bold text-center uppercase border-b py-2">প্রবেশ করুন</h1>
            <div className=" space-y-1">
                <label>আপনার ই-মেইল অথবা নাম্বার লিখুন : </label>
                <input
                    type='email'
                    name='email'
                    onChange={(e) => handleChange(e, value, setValue)}
                    className='w-full p-2 rounded placeholder:text-sm border focus:outline-blue-500'
                />
            </div>

            <div className="relative space-y-1">
                <label>আপনার পাসওয়ার্ড লিখুন : </label>
                <input
                    type={type}
                    name='password'
                    onChange={(e) => handleChange(e, value, setValue)}
                    className='w-full p-2 rounded placeholder:text-sm border focus:outline-blue-500'
                />
                <button onClick={() => passwordView(type, setType)} className='absolute right-2 bottom-3 text-gray-600'>
                    {type === 'password' ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
                </button>
            </div>

            <button
                onClick={() => handleSignIn({value, addUser,addNotifications, setLoading, router, toast})}
                className="w-full p-2 bg-blue-400 text-white rounded hover:bg-blue-500 hover:transition-all hover:duration-300"
            >
                {loading ? 'অপেক্ষা করুন...' : 'প্রবেশ করুন'}
            </button>

            <div className="p-2 flex justify-between text-blue-500">
                <Link href='/user/forget-password' className=''>পাসওয়ার্ড ভুলে গেছেন?</Link>
                <Link href='/user/signup' className=''>নতুন একাউন্ট করুন</Link>
            </div>
        </div>
    )
}