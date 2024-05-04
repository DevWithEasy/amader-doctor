import useUserStore from '@/app/_store/userStore';
import api_url from '@/app/_utils/apiurl';
import Image from 'next/image'
import Link from 'next/link'

const DoctorNavigation = () => {
    const { user } = useUserStore()
    return (
        <div
            className="h-[50px] flex justify-between items-center"
        >
            <Link
                href={`/user/doctor/${user?._id}/`}
                className="h-[50px] w-[40px] flex flex-col justify-center items-center bg-white hover:-translate-y-3 transition-all duration-500 rounded-full"
            >
                <Image
                    src='/image/nav_doctor.png'
                    alt="home"
                    height={20}
                    width={20}
                />
                <span className="text-sm text-nowrap">ডাক্তার তথ্য</span>
            </Link>
            <Link
                href={`/user/doctor/${user?._id}/info`}
                className="h-[50px] w-[40px] flex flex-col justify-center items-center bg-white hover:-translate-y-3 transition-all duration-500 rounded-full"
            >
                <Image
                    src='/image/nav_info.png'
                    alt="home"
                    height={20}
                    width={20}
                />
                <span className="text-sm">বায়োডাটা</span>
            </Link>
            <Link
                href={`/user/doctor/${user?._id}/chambers`}
                className="h-[50px] w-[40px] flex flex-col justify-center items-center bg-white hover:-translate-y-3 transition-all duration-500 rounded-full"
            >
                <Image
                    src='/image/nav_chamber.png'
                    alt="home"
                    height={20}
                    width={20}
                />
                <span className="text-sm">চেম্বারস</span>
            </Link>
            <Link
                href={`/user/doctor/${user?._id}/appointments`}
                className="h-[50px] w-[40px] flex flex-col justify-center items-center bg-white hover:-translate-y-3 transition-all duration-500 rounded-full"
            >
                <Image
                    src='/image/nav_book.png'
                    alt="home"
                    height={20}
                    width={20}
                />
                <span className="text-sm">অ্যাপয়েন্টমেন্টস</span>
            </Link>
            <Link
                href={`/user/doctor/${user?._id}/transections`}
                className="h-[50px] w-[40px] flex flex-col justify-center items-center bg-white hover:-translate-y-3 transition-all duration-500 rounded-full"
            >
                <Image
                    src='/image/nav_payments.png'
                    alt="home"
                    height={20}
                    width={20}
                />
                <span className="text-sm">পেমেন্টস</span>
            </Link>
            <Link
                href={`/user/${user?._id}/`}
                className="h-[50px] w-[40px] flex flex-col justify-center items-center bg-white hover:-translate-y-3 transition-all duration-500 rounded-full"
            >
                <Image
                    src={user?.image?.url ? `${api_url}/${user?.image?.url}` : '/image/user.png'}
                    alt="home"
                    height={20}
                    width={20}
                />
                <span className="text-sm">প্রোফাইল</span>
            </Link>
        </div>
    );
};

export default DoctorNavigation;