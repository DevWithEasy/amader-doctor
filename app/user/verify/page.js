'use client'
import { useState } from "react";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { handleSendCodeAgain, handleVerify } from "@/app/_utils/users_utils";
import {useToast } from '@chakra-ui/react'

export default function VerifyAccount(){
    const toast = useToast()
    const router = useRouter()
    const [code,setCode] = useState('')
    const [loading,setLoading] = useState(false)
    const [verified,setVerified] = useState(false)

    return(
        <div className="pt-20">
            {!verified ? <div className="w-full md:w-1/2 mx-auto  border rounded bg-white">
                <h1 className="p-2 bg-gray-100 text-2xl font-bold uppercase">একাউন্ট যাচাইকরন</h1>
                <div className="px-2 py-4 space-y-2">
                    <span className="text-gray-500">আপনার ইমেইলে একটি ভেরিফিকেশন কোড পাঠানো হয়েছে।আপনার নিশ্চিতকরন কোডটি বসিয়ে একাউন্টটি সচল করুন। </span> 
                    <input 
                    type='email' 
                    name='email' 
                    onChange={(e)=>setCode(e.target.value)} 
                    placeholder='Verification code' 
                    className='w-full p-2 border rounded focus:outline-blue-500'
                    />
                    
                </div>
                <div className="flex justify-end p-2 space-x-2 border-t">
                    <button
                        onClick={()=>handleSendCodeAgain(toast)} 
                        className="text-blue-500"
                    >
                        পুনরায় কোড পাঠান
                    </button>
                    <button
                        onClick={()=>handleVerify(code,router,setLoading,setVerified,toast)} 
                        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:transition-all hover:duration-300">
                            {loading ? 'অপেক্ষা করুন...' : 'নিশ্চিত করুন'}
                    </button>
                </div>
            </div> :
            <div className="flex flex-col items-center space-y-3 p-4 w-full md:w-1/2 mx-auto  border shadow rounded bg-white">
            <Image 
                src='/image/verified.png'
                alt="verify_image" 
                height={64}
                width={64}
                className="w-16 mx-auto"
            />
            <p>আপনার একাউন্ট সফলভাবে চালু হয়েছে.</p>
            <p className="text-gray-400 animate-bounce">আপনাকে প্রবেশ করুন পেইজে নিয়ে যাওয়া হচ্ছে...</p>
            </div>}
        </div>
    )
}
