'use client'

import useUserStore from '@/app/_store/userStore'
import Link from 'next/link'
import { MdNotificationsNone } from 'react-icons/md'

export default function IsUser() {
    const { isAuth } = useUserStore()
    return (
        <div className="flex justify-end items-center space-x-3">
            {isAuth &&
                <div className="flex justify-end items-center space-x-2">
                    <Link
                        href="/notification"
                        className="relative p-2 text-white hover:text-black hover:bg-white trasition-all duration-300 rounded"
                    >
                        <MdNotificationsNone size={20} className="" />
                        {notifications?.length > 0 && (
                            <div className="absolute -right-1 -top-0 w-5 h-5 flex justify-center items-center bg-red-500 text-white text-xs rounded-full">
                                <span>
                                    {
                                        notifications.filter(
                                            (notification) => notification.status === "unread"
                                        ).length
                                    }
                                </span>
                            </div>
                        )}
                    </Link>

                </div>
            }
            {!isAuth &&
                <Link
                    href="/signin"
                    className="px-4 py-2 bg-white text-blue-500 text-nowrap trasition-all duration-300 rounded"
                >
                    প্রবেশ করুন
                </Link>
            }

        </div>
    )
}
