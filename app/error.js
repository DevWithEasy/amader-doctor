'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div
            className='h-[calc(100vh-60px)] flex justify-center items-center'
        >
            <div
                className='flex flex-col justify-center text-center items-center space-y-4'
            >
                <Image
                    src='/image/error.png'
                    alt='server error'
                    height={60}
                    width={60}
                />
                <div
                    className='pb-5'
                >
                    <h2 className='text-xl'>সার্ভারের ত্রুটিজনিত সমস্যা !</h2>
                    <p className='text-gray-500'>আমরা আন্তরিকভাবে দুঃখিত। অনুগ্রহ পূর্বক পুনরায় আবার রিফ্রেশ দিয়ে চেষ্টা করুন।</p>
                </div>

                <button
                    onClick={
                        () => reset()
                    }
                    className='w-28 py-2 bg-blue-500 text-white rounded'
                >
                    রিফ্রেশ দিন
                </button>
            </div>
        </div>
    )
}