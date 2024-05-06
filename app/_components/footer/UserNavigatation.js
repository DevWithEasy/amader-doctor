import {
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import FindModal from '../search_find/FindModal';

const UserNavigatation = () => {
    const [view,setView] = useState(false)
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
            <button
                onClick={()=>setView(true)}
                className="h-[50px] w-[40px] flex flex-col justify-center items-center bg-white hover:-translate-y-3 transition-all duration-500 rounded-full"
            >
                <Image
                    src='/image/nav_search.png'
                    alt="home"
                    height={20}
                    width={20}
                />
                <span className="text-sm">খুঁজুন</span>
            </button>
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
            <Menu>
                <MenuButton
                className="h-[50px] w-[40px] hover:text-blue-500 hover:-translate-y-3 transition-all duration-500 rounded-full"
                >
                    <div
                        className='flex flex-col justify-center items-center bg-white'
                    >
                        <Image
                            src='/image/nav_more.png'
                            alt="home"
                            height={20}
                            width={20}
                        />
                        <span className="text-sm">আরো</span>
                    </div>
                </MenuButton>
                <MenuList>
                <MenuItem>
                        <Link
                            href={`/doctors/today`}
                            className="py-1 flex justify-center items-center space-x-2"
                        >
                            <Image
                                src='/image/nav_doctor.png'
                                alt="home"
                                height={20}
                                width={20}
                            />
                            <span className="text-sm">আজকে ডাক্তারগণ</span>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href={`/maps`}
                            className="py-1 flex justify-center items-center space-x-2"
                        >
                            <Image
                                src='/image/nav_map.png'
                                alt="home"
                                height={20}
                                width={20}
                            />
                            <span className="text-sm">ম্যাপে হাসপাতাল</span>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href={`/blood-bank`}
                            className="py-1 flex justify-center items-center space-x-2"
                        >
                            <Image
                                src='/image/nav_blood.png'
                                alt="home"
                                height={20}
                                width={20}
                            />
                            <span className="text-sm">ব্লাড ব্যাংক</span>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href={`/about`}
                            className="py-1 flex justify-center items-center space-x-2"
                        >
                            <Image
                                src='/image/nav_info.png'
                                alt="home"
                                height={20}
                                width={20}
                            />
                            <span className="text-sm">আমাদের সম্পর্কে</span>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href={`/terms-conditions`}
                            className="py-1 flex justify-center items-center space-x-2"
                        >
                            <Image
                                src='/image/nav_terms.png'
                                alt="home"
                                height={20}
                                width={20}
                            />
                            <span className="text-sm">শর্তাবলী ও নীতিমালা</span>
                        </Link>
                    </MenuItem>
                </MenuList>
            </Menu>
            {
                view && <FindModal {...{view,setView}}/>
            }
        </div>
    );
};

export default UserNavigatation;