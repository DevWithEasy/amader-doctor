'use client'
import useUserStore from "@/app/_store/userStore";
import { usePathname } from "next/navigation";
import Image from 'next/image'
import Link from 'next/link'
import api_url from "@/app/_utils/apiurl";
import UserNavigatation from "./UserNavigatation";
import ProfileNavigation from "./ProfileNavigation";
import DoctorNavigation from "./DoctorNavigation";

const Footer = () => {
    const { user } = useUserStore()
    const path = usePathname()
    const user_path = `/user/${user?._id}`
    const doctor_path = `/user/doctor/${user?._id}`
    const user_pathname = path.split('/').slice(0, 3).join('/')
    const doctor_pathname = path.split('/').slice(0, 4).join('/')

    return (
        <div
            className="md:hidden fixed bottom-0 h-[50px] w-full px-4 bg-white border-t shadow-xl"
        >

            {
                user_pathname === user_path ?
                    <ProfileNavigation/>
                    :
                    doctor_pathname === doctor_path ?
                        <DoctorNavigation/>
                        :
                        <UserNavigatation/>
            }
        </div>
    );
};

export default Footer;