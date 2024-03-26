import Link  from "next/link";
import { FaUsers, FaRegHospital, FaHome } from 'react-icons/fa'
import { IoBookSharp } from "react-icons/io5";
import { FcGraduationCap } from 'react-icons/fc'
import { MdPayment } from 'react-icons/md'

export default function AdminLayout({ children }) {
    return (
        <div className="h-[calc(100vh-60px)] flex justify-between font-bangla">
            <div className="md:w-2/12 p-4 pt-4 flex flex-col space-y-2">
                <Link
                    href="/admin"
                    className='flex items-center space-x-2 px-4 py-1 rounded-full'
                >
                    <FaHome />
                    <span className="hidden md:inline-block">
                        ড্যাশবোর্ড
                    </span>
                </Link>
                <Link
                    href="/admin/users"
                    className='flex items-center space-x-2 px-4 py-1 rounded-full'
                >
                    <FaUsers />
                    <span className="hidden md:inline-block">
                        ব্যবহারকারী
                    </span>
                </Link>
                <Link
                    href="/admin/specialists"
                    className='flex items-center space-x-2 px-4 py-1 rounded-full'
                >
                    <IoBookSharp />
                    <span className="hidden md:inline-block">
                        বিশেষজ্ঞ বিষয়
                    </span>
                </Link>
                <Link
                    href="/admin/doctors"
                    className='flex items-center space-x-2 px-4 py-1 rounded-full'
                >
                    <FcGraduationCap />
                    <span className="hidden md:inline-block">
                        ডাক্তারগণ
                    </span>
                </Link>
                <Link
                    href="/admin/hospitals"
                    className='flex items-center space-x-2 px-4 py-1 rounded-full'
                >
                    <FaRegHospital />
                    <span className="hidden md:inline-block">
                        হাসপাতাল
                    </span>
                </Link>
                <Link
                    href="/admin/payments"
                    className='flex items-center space-x-2 px-4 py-1 rounded-full'
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

