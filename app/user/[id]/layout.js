'use client'
import useUserStore from '@/app/_store/userStore'
import Link from 'next/link'
import { useParams, usePathname, useRouter } from 'next/navigation'

export default function Layout({ children }) {
    const { isAuth } = useUserStore()
    const { id } = useParams()
    const path = usePathname()
    const router = useRouter()
    const pathname = path.split('/')[path.split('/').length - 1]
    if (!isAuth) {
        return router.push('/user/signin')
    } else {
        return (
            <div
                className='h-[calc(100vh-60px)] flex justify-between'
            >
                <div
                    className='hidden md:block h-[calc(100vh-60px)] w-2/12 px-4 pt-4 border-r'
                >
                    <Link
                        href={`/user/${id}/`}
                        className={`block p-2 rounded ${pathname === id && 'bg-gray-100'}`}
                    >
                        প্রোফাইল
                    </Link>
                    <Link
                        href={`/user/${id}/info`}
                        className={`block p-2 rounded ${pathname === 'info' && 'bg-gray-100'}`}
                    >
                        ব্যক্তিগত তথ্য
                    </Link>
                    <Link
                        href={`/user/${id}/appointments`}
                        className={`block p-2 rounded ${pathname === 'appointments' && 'bg-gray-100'}`}
                    >
                        অয়াপয়েন্টমেন্ট সমূহ
                    </Link>
                    <Link
                        href={`/user/${id}/transections`}
                        className={`block p-2 rounded ${pathname === 'transections' && 'bg-gray-100'}`}
                    >
                        ট্রানজেকশন সমুহ
                    </Link>
                    <Link
                        href={`/user/${id}/transections/add`}
                        className={`block p-2 rounded ${pathname === 'add' && 'bg-gray-100'}`}
                    >
                        ব্যালেন্স যোগ
                    </Link>
                </div>
                <div
                    className='h-[calc(100vh-60px)] md:w-10/12 w-full pb-10 overflow-y-auto'
                >
                    {children}
                </div>
            </div>
        )
    }
}
