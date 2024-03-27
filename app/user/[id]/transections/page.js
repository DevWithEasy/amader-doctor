'use client'
import useUserStore from '@/app/_store/userStore'
import { toBengaliNumber } from 'bengali-number'

export default function Transections() {
    const {user} = useUserStore()
    return (
        <div className="">
            <div className="bg-white/50 p-4 rounded-2xl space-y-2">
                <p className="flex justify-between">
                    <span className="">বর্তমান ব্যালেন্সঃ</span>
                    <span>{toBengaliNumber(user?.balance)} টাকা </span>
                </p>
                <p className="flex justify-between">
                    <span className="">মোট অ্যাপয়েন্টমেন্টঃ </span>
                    <span>{toBengaliNumber(user?.appointments)}</span>
                </p>
            </div>
        </div>
    )
}
