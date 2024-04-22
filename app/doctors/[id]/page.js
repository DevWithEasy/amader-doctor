import api_url from "@/app/_utils/apiurl";
import Image from 'next/image'
import { PiGraduationCap } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { toBengaliNumber } from 'bengali-number'
import Link from 'next/link'

async function getData(id) {
  const randomParam = Math.random().toString(36).substring(7);
  const res = await fetch(`${api_url}/api/doctor/${id}?${randomParam}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Doctor({ params }) {
  const { data: { doctor, doctors } } = await getData(params.id)
  console.log(doctor)
  return (
    <div
      className="w-10/12 mx-auto pt-5 flex justify-between space-x-5"
    >
      <div
        className="w-8/12 space-y-5"
      >
        <div
          className="flex p-4 border rounded space-x-4"
        >
          <Image
            src={`${api_url}/${doctor?.user?.image?.url}`}
            alt=""
            width={150}
            height={50}
            className='w-[170px] h-[170px] rounded-md'
          />
          <div
            className="spacey-2"
          >
            <p
              className="text-xl font-semibold"
            >
              {doctor?.name}
            </p>
            <div
              className="flex items-center space-x-2 text-xm text-gray-500"
            >
              <PiGraduationCap />
              <span>{toBengaliNumber(doctor?.experience)} বছরের অভিজ্ঞতা</span>
            </div>
            <div
              className="flex items-center space-x-2 text-xm text-gray-500"
            >
              <CiLocationOn />
              <span>{doctor?.designation} হিসেবে {doctor?.workedAt} এ কর্মরত আছেন </span>
            </div>
            <button
              className='mt-2 px-4 py-1 text-sm bg-blue-50 text-blue-500 rounded-full'
            >
              {doctor?.specialization?.name}
            </button>
            <div
              className="pt-5"
            >
              <Link
                href={`/appointment/submit/${doctor?._id}`}
                className="px-4 py-1 text-center bg-blue-500 text-white rounded-full"
              >
                অ্যাপয়েন্টমেন্ট নিন
              </Link>
            </div>
          </div>
        </div>
        <div
          className="p-4 border rounded"
        >
          <p
            className="text-xl font-semibold"
          >
            ডাক্তারের সমন্ধে বিস্তারিতঃ
          </p>
          {doctor?.bio &&
            <div dangerouslySetInnerHTML={{__html : doctor?.bio}}></div>
          }
        </div>
      </div>
      <div
        className="w-4/12 p-4 border rounded space-y-5"
      >
        <p
          className="font-semibold"
        >
          আরো ডাক্তারগণঃ
        </p>
        <div
          className="space-y-2"
        >
          {
            doctors.map(doctor =>
              <Link
                key={doctor._id}
                href={`/doctors/${doctor._id}`}
                className="p-3 flex space-x-2 hover:bg-gray-100 hover:rounded-md border-b transition-all duration-300"
              >
                <Image
                  src={`${api_url}/${doctor?.user?.image?.url}`}
                  alt=""
                  width={70}
                  height={70}
                  className='w-[70px] h-[70px] rounded-full'
                />
                <div>
                  
                  <button
                    className='px-4 py-0.5 text-sm bg-blue-50 text-blue-500 rounded-full'
                  >
                    {doctor?.specialization?.name}
                  </button>
                  <p>{doctor.name}</p>
                  <p>{toBengaliNumber(doctor.experience)} বছর</p>
                </div>
              </Link>
            )
          }
        </div>
      </div>
    </div>
  )
}
