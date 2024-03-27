import api_url from '@/app/_utils/apiurl'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function Hospital({ hospital }) {

    return (
        <Link
            href={`/hospitals/${hospital?._id}`}
            className="p-2 space-y-2 bg-white border hover:border-blue-500 rounded cursor-pointer"
        >
            <div
                className='p-2 space-y-3'
            >
                <button
                    className='inline-block px-4 py-1 bg-blue-100 text-blue-600 text-sm rounded-full'
                >
                    {
                        hospital?.type === 'hospital' ? 'হাসপাতাল' :
                            hospital?.type === 'diagnostic' ? 'ডায়নোগষ্টিক সেন্টার ' :
                                hospital?.type === 'clinic' ? 'ক্লিনিক ' : 'নিজস্ব চেম্বার'
                    }
                </button>
                <div>
                    <p
                        className='font-semibold text-blue-500'
                    >
                        {hospital?.name}
                    </p>
                    <p className='text-gray-500'>{hospital?.location}</p>
                </div>
            </div>
        </Link>

    )
}