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
                className='h-[calc(100vh-60px)] w-2/12 px-4 pt-4 border-r'
            >
                <Link
                    href={`/user/${id}/`}
                    className={`block p-2 rounded ${pathname === id && 'bg-gray-100'}`}
                >
                    Profile
                </Link>
                <Link
                    href={`/user/${id}/info`}
                    className={`block p-2 rounded ${pathname === 'info' && 'bg-gray-100'}`}
                >
                    Personal info
                </Link>
                <Link
                    href={`/user/${id}/appointments`}
                    className={`block p-2 rounded ${pathname === 'appointments' && 'bg-gray-100'}`}
                >
                    Appointments
                </Link>
                <Link
                    href={`/user/${id}/transections`}
                    className={`block p-2 rounded ${pathname === 'transections' && 'bg-gray-100'}`}
                >
                    Transections
                </Link>
            </div>
            <div
                className='w-10/12'
            >
                {children}
            </div>
        </div>
    )
}
