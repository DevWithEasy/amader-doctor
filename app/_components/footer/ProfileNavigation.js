import useUserStore from '@/app/_store/userStore';
import Image from 'next/image'
import Link from 'next/link'
import api_url from "@/app/_utils/apiurl";

const ProfileNavigation = () => {
    const { notifications, user } = useUserStore()
    return (
        <div
            className="h-[50px] flex justify-between items-center"
        >
            <Link
                href={`/user/${user?._id}`}
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
            <Link
                href={`/user/${user?._id}/info`}
                className="h-[50px] w-[40px] flex flex-col justify-center items-center bg-white hover:-translate-y-3 transition-all duration-500 rounded-full"
            >
                <Image
                    src='/image/nav_info.png'
                    alt="home"
                    height={20}
                    width={20}
                />
                <span className="text-sm">তথ্য</span>
            </Link>
            <Link
                href={`/user/${user?._id}/appointments`}
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
                href={`/user/${user?._id}/transections`}
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
                href={`/user/${user?._id}/notifications`}
                className="relative h-[50px] w-[40px] flex flex-col justify-center items-center bg-white hover:-translate-y-3 transition-all duration-500 rounded-full"
            >
                <Image
                    src='/image/nav_notification.png'
                    alt="home"
                    height={20}
                    width={20}
                />
                <span className="text-sm">বার্তা</span>
                <div
                    className='absolute top-0 right-0.5 h-4 w-4 flex justify-center items-center bg-white text-xs text-nowrap text-red-500 rounded-full'
                >
                    <span>
                        {
                            notifications.filter(
                                (notification) => notification.status === false
                            ).length
                        }
                    </span>
                </div>
            </Link>
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
                <span className="text-sm">ডাক্তার</span>
            </Link>
        </div>
    );
};

export default ProfileNavigation;