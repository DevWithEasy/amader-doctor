import AppoinmentChamberList from "@/app/_components/appointment/AppoinmentChamberList"
import AppointmentForm from "@/app/_components/appointment/AppointmentForm"
import api_url from "@/app/_utils/apiurl"
import find_image_url from "@/app/_utils/find_image_url";
import { toBengaliNumber } from "bengali-number";
import Image from 'next/image'

async function getData(id) {
  const randomParam = Math.random().toString(36).substring(7);
  const res = await fetch(`${api_url}/api/doctor/find/appointment/${id}?${randomParam}`)
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function AppointmentSubmit({ params }) {
  const { data } = await getData(params.id)
  
  return (
    <main
      className="pb-16"
    >
      <div
        className="md:flex justify-between"
      >
      <div className='md:w-1/2'>
        <div className='flex space-x-4 p-2 pt-2 bg-white rounded'>
          <Image
            src={find_image_url(data.user)}
            alt=""
            width={96}
            height={96}
            className='h-28 w-28 rounded-md'
          />
          <div>
            <p className='font-bold'>{data?.name}</p>
            <p className="text-blue-500">{data?.specialization?.name}</p>
            <p>{data?.education}</p>
            <p>{data?.experienceArea}</p>
            <p>সার্ভিস চার্জ - {toBengaliNumber(data?.feesPerConsultation)} টাকা</p>
          </div>
        </div>
        {data?.chambers && <AppoinmentChamberList chambers={data.chambers} />}
      </div>
      <div
        className="md:w-1/2"
      >
        <AppointmentForm {...{doctor : data}}/>
      </div>
    </div>
    </main>
    
  )
}
