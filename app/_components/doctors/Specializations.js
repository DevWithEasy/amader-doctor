import Image from 'next/image'
import Link from 'next/link'

export default function Specializations({ specializations }) {
    return (
        <div
            className="h-[calc(100vh-60px)] w-2/12 p-2 border-r space-y-3 overflow-y-auto"
        >
            <form>
                <input
                    placeholder="ডাক্তার খুঁজুন (নাম,অভিজ্ঞতা) দিয়ে"
                    className="w-full p-2 border rounded focus:outline-blue-500 placeholder:text-sm"
                />
            </form>
            <p
                className="border-b px-4"
            >
                অভিজ্ঞতাঃ
            </p>
            <div>
                {specializations &&
                    specializations.map(s =>
                        <Link
                            key={s._id}
                            href={`/doctors/search/${s._id}`}
                            className="px-4 py-2 flex items-center space-x-3 hover:bg-blue-200 transition-all duration-300 rounded-md"
                        >
                            <Image
                                src='/image/brain.png'
                                alt={s.name}
                                width={25}
                                height={25}
                                className=""
                            />
                            <span className="text-blue-600">{s.name}</span>
                        </Link>
                    )
                }
            </div>

        </div>
    )
}
