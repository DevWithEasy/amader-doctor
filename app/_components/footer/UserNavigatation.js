import Image from 'next/image'
import Link from 'next/link'
import api_url from "@/app/_utils/apiurl";
import useUserStore from '@/app/_store/userStore';

const UserNavigatation = () => {
    const { isAuth, user } = useUserStore()
    return (
        <div
            className="h-[50px] flex justify-between items-center"
        >
            <Link
                href={`/`}
                className="h-[50px] w-[40px] flex flex-col justify-center items-center bg-white hover:-translate-y-3 transition-all duration-500 rounded-full"
            >
                <Image
                    src='/image/nav_home.png'
                    alt="home"
                    height={20}
                    width={20}
                />
                <span className="text-sm">হোম</span>
            </Link>
            <Link
                href={`/`}
                className="h-[50px] w-[40px] flex flex-col justify-center items-center bg-white hover:-translate-y-3 transition-all duration-500 rounded-full"
            >
                <Image
                    src='/image/nav_search.png'
                    alt="home"
                    height={20}
                    width={20}
                />
                <span className="text-sm">খুঁজুন</span>
            </Link>
            <Link
                href={`/doctors`}
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
            <Link
                href={`/hospitals`}
                className="h-[50px] w-[40px] flex flex-col justify-center items-center bg-white hover:-translate-y-3 transition-all duration-500 rounded-full"
            >
                <Image
                    src='/image/nav_hospital.png'
                    alt="home"
                    height={20}
                    width={20}
                />
                <span className="text-sm">হাসপাতাল</span>
            </Link>
            <Link
                    href={`/ambulances`}
                    className="h-[50px] w-[40px] flex flex-col justify-center items-center bg-white hover:-translate-y-3 transition-all duration-500 rounded-full"
                >
                    <Image
                        src='/image/nav_ambulance.png'
                        alt="home"
                        height={20}
                        width={20}
                    />
                    <span className="text-sm">এম্বুল্যান্স</span>
                </Link>
                <Link
                    href={`/ambulances`}
                    className="h-[50px] w-[40px] flex flex-col justify-center items-center bg-white hover:-translate-y-3 transition-all duration-500 rounded-full"
                >
                    <Image
                        src='/image/nav_more.png'
                        alt="home"
                        height={20}
                        width={20}
                    />
                    <span className="text-sm">আরো</span>
                </Link>
        </div>
    );
};

export default UserNavigatation;