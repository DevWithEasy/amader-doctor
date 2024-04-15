import getVanueTypeBangla from '@/app/_utils/vanueTypeBangla'
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
                    {getVanueTypeBangla(hospital?.type)}
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