'use client'
import Link from 'next/link'
import {useParams,usePathname} from 'next/navigation'

export default function Layout({ children }) {
    const {id} = useParams()
    const path = usePathname()
    const pathname = path.split('/')[path.split('/').length - 1]
    return (
        <div
            className='h-[calc(100vh-60px)] flex justify-between'
        >
            <div
                className='hidden md:block h-[calc(100vh-60px)] w-2/12 px-4 pt-4 border-r'
            >
                <Link
                    href={`/user/doctor/${id}`}
                    className={`block p-2 rounded ${pathname === id && 'bg-gray-100'}`}
                >
                    প্রোফাইল
                </Link>
                <Link
                    href={`/user/doctor/${id}/info`}
                    className={`block p-2 rounded ${pathname === 'info' && 'bg-gray-100'}`}
                >
                    ব্যক্তিগত তথ্য
                </Link>
                <Link
                    href={`/user/doctor/${id}/appointments`}
                    className={`block p-2 rounded ${pathname === 'appointments' && 'bg-gray-100'}`}
                >
                    অ্যাপয়েন্টমেন্ট
                </Link>
                <Link
                    href={`/user/doctor/${id}/chambers`}
                    className={`block p-2 rounded ${pathname === 'chambers' && 'bg-gray-100'}`}
                >
                    চেম্বার
                </Link>
                <Link
                    href={`/user/doctor/${id}/transections`}
                    className={`block p-2 rounded ${pathname === 'transections' && 'bg-gray-100'}`}
                >
                    ট্রানজেকশন
                </Link>
            </div>
            <div
                className='h-[calc(100vh-60px)] md:w-10/12 w-full p-4 pb-16 overflow-y-auto'
            >
                {children}
            </div>
        </div>
    )
}
