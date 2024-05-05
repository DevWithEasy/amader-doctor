'use client'
import useUserStore from '@/app/_store/userStore'
import Link from 'next/link'
import UserMenu from './UserMenu'

export default function IsUser() {
    const { isAuth } = useUserStore()
    return (
        <div className="flex justify-end items-center space-x-3">
            {!isAuth ?
                <Link
                    href="/user/signin"
                    className="px-4 py-2 bg-white text-blue-500 text-nowrap trasition-all duration-300 rounded"
                >
                    লগ-ইন
                </Link>
                :
                <UserMenu />
            }

        </div>
    )
}
