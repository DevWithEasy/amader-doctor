import Link from 'next/link'
import IsUser from "./IsUser"

const Header = () => {
    return (
        <div className="h-[60px] p-2 flex justify-between items-center bg-blue-500 font-bangla">
            <div className="w-6/12 md:w-3/12 text-white">
                <Link href="/" className="flex items-center space-x-3">
                    <span className="text-xl font-bold">আমাদের ডাক্তার</span>
                </Link>
            </div>

            <div className="w-6/12 md:flex justify-end md:space-x-4 hidden">
                <Link
                    href="/doctors"
                    className="px-4 py-2 text-white hover:bg-white hover:text-blue-500 trasition-all duration-300 rounded"
                >
                    ডাক্তার
                </Link>
                <Link
                    href="/hospitals"
                    className="px-4 py-2 text-white hover:bg-white hover:text-blue-500 trasition-all duration-300 rounded"
                >
                    হাসপাতাল
                </Link>
                <Link
                    href="/ambulances"
                    className="px-4 py-2 text-white hover:bg-white hover:text-blue-500 trasition-all duration-300 rounded"
                >
                    এম্বুল্যান্স
                </Link>
                <Link
                    href="/blood-bank"
                    className="px-4 py-2 text-white hover:bg-white hover:text-blue-500 trasition-all duration-300 rounded"
                >
                    ব্লাড ব্যাংক
                </Link>
                <Link
                    href="/maps"
                    className="px-4 py-2 text-white hover:bg-white hover:text-blue-500 trasition-all duration-300 rounded"
                >
                    ম্যাপ
                </Link>
                
            </div>
            <IsUser />
        </div>
    )
}

export default Header