'use client'
import { usePathname } from 'next/navigation'
import Link  from "next/link";
import { FaUsers, FaRegHospital, FaHome } from 'react-icons/fa'
import { IoBookSharp } from "react-icons/io5";
import { FcGraduationCap } from 'react-icons/fc'
import { MdPayment } from 'react-icons/md'

export default function AdminLayout({ children }) {
    const path = usePathname()
    const pathname = path.split('/')[path.split('/').length - 1]

    return (
        <div className="h-[calc(100vh-60px)] flex justify-between font-bangla bg-slate-100">
            <div className="md:w-2/12 p-4 pt-4 flex flex-col space-y-2">
                <Link
                    href="/admin"
                    className={`flex items-center space-x-2 px-4 py-1 rounded-full ${pathname === 'admin' && 'bg-white'}`}
                >
                    <FaHome />
                    <span className="hidden md:inline-block">
                        ড্যাশবোর্ড
                    </span>
                </Link>
                <Link
                    href="/admin/users"
                    className={`flex items-center space-x-2 px-4 py-1 rounded-full ${pathname === 'users' && 'bg-white'}`}
                >
                    <FaUsers />
                    <span className="hidden md:inline-block">
                        ব্যবহারকারী
                    </span>
                </Link>
                <Link
                    href="/admin/specialists"
                    className={`flex items-center space-x-2 px-4 py-1 rounded-full ${pathname === 'specialists' && 'bg-white'}`}
                >
                    <IoBookSharp />
                    <span className="hidden md:inline-block">
                        বিশেষজ্ঞ
                    </span>
                </Link>
                <Link
                    href="/admin/doctors"
                    className={`flex items-center space-x-2 px-4 py-1 rounded-full ${pathname === 'doctors' && 'bg-white'}`}
                >
                    <FcGraduationCap />
                    <span className="hidden md:inline-block">
                        ডাক্তারগণ
                    </span>
                </Link>
                <Link
                    href="/admin/hospitals"
                    className={`flex items-center space-x-2 px-4 py-1 rounded-full ${pathname === 'hospitals' && 'bg-white'}`}
                >
                    <FaRegHospital/>
                    <span className="hidden md:inline-block">
                        হাসপাতাল
                    </span>
                </Link>
                <Link
                    href="/admin/payments"
                    className={`flex items-center space-x-2 px-4 py-1 rounded-full ${pathname === 'payments' && 'bg-white'}`}
                >
                    <MdPayment />
                    <span className="hidden md:inline-block">
                        পেমেন্টসমূহ
                    </span>

                </Link>
            </div>
            <div className="w-full md:w-10/12 bg-white">{children}</div>
        </div>
    );
}

