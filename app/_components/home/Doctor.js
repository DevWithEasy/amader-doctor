import api_url from "@/app/_utils/apiurl";
import Image from "next/image";
import Link from "next/link";
import { toBengaliNumber } from 'bengali-number'

export default function Doctor({ doctor }) {
    return (
        <div
            key={doctor._id}
            className="p-3 flex flex-col border hover:border-blue-500 rounded-md space-y-2"
        >
            <Link
                href={`/doctors/${doctor?._id}`}
            >
                <Image
                    src={`${api_url}/${doctor?.user?.image?.url}`}
                    alt=""
                    width={200}
                    height={50}
                    className='w-[500px] h-[200px] rounded-md'
                />
            </Link>
            <Link
                href={`/doctors/${doctor?._id}`}
                className="flex-1"
            >
                <button
                    className='mb-2 px-4 py-1 bg-blue-50 text-blue-500 rounded-full'
                >
                    {doctor?.specialization?.name}
                </button>

                <p
                    className='block text-lg font-semibold'
                >
                    {doctor?.name}
                </p>

                <p className="text-blue-500">{toBengaliNumber(doctor?.experience)} বছরের অভিজ্ঞতায়</p>
                {
                    doctor?.designation && doctor?.workedAt && <p>{doctor?.designation} , {doctor?.workedAt}</p>
                }
                <p>সার্ভিস চার্জ - <span className="font-bold">{toBengaliNumber(doctor?.feesPerConsultation)}</span> টাকা</p>
            </Link>
            <div
                className="pt-3"
            >
                <Link
                    href={`/appointment/submit/${doctor?._id}`}
                    className="block py-1 text-center border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full"
                >
                    অ্যাপয়েন্টমেন্ট নিন
                </Link>
            </div>
        </div>
    )
}
