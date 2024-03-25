import Search from "./Search";
import Image from 'next/image'
import Link from 'next/link'

export default function SearchAndCategory({specializations}) {
    return (
        <div
            className="pt-5 space-y-3"
        >
            <Search {...{specializations}}/>
            <div
                className="flex justify-center space-x-2"
            >
                {specializations &&
                    specializations.map(s=>
                        <Link
                            key={s._id}
                            href={`/doctors/search/${s._id}`}
                            className="px-4 py-2 flex flex-col items-center space-y-3 bg-blue-100 hover:bg-blue-200 transition-all duration-300 rounded-md"
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
