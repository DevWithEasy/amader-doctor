import Search from "./Search";
import Image from 'next/image'
import Link from 'next/link'

export default function SearchAndCategory({ specializations }) {
    return (
        <div
            className="pt-5 space-y-3"
        >
            <Search {...{ specializations }} />
            <div
                className="md:w-10/12 md:mx-auto grid grid-cols-3 md:grid-cols-6 gap-2"
            >
                {specializations &&
                    specializations.slice(0, 6).map(s =>
                        <Link
                            key={s._id}
                            href={`/doctors/search/${s._id}`}
                            className="min-w-[150px] px-4 py-2 flex flex-col items-center space-y-3 bg-blue-100 hover:bg-blue-200 border border-blue-100 hover:border-blue-500 transition-all duration-300 rounded-md"
                        >
                            <Image
                                src='/image/brain.png'
                                alt={s.name}
                                width={30}
                                height={30}
                                className=""
                            />
                            <span className="text-blue-600 text-sm font-semibold">{s.name}</span>
                        </Link>
                    )
                }
            </div>

        </div>
    )
}
