import AppoinmentChamberList from "@/app/_components/appointment/AppoinmentChamberList"
import AppointmentForm from "@/app/_components/appointment/AppointmentForm"
import api_url from "@/app/_utils/apiurl"
import Image from 'next/image'

async function getData(id) {
  const res = await fetch(`${api_url}/api/doctor/find/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function AppointmentSubmit({ params }) {
  const { data } = await getData(params.id)

  return (
    <main>
      <div
        className="flex justify-between"
      >
      <div className='w-1/2'>
        <div className='flex space-x-4 p-2 pt-2 bg-white rounded'>
          <Image
            src={`${api_url}/${data?.user?.image?.url}`}
            alt=""
            width={96}
            height={96}
            className='h-24 w-24 rounded-md'
          />
          <div>
            <p className='font-bold'>{data?.name}</p>
            <p>{data?.education},{data?.specialization}</p>
            <p>{data?.experienceArea}</p>
            <p>সার্ভিস চার্জ - {data?.feesPerConsultation}</p>
          </div>
        </div>
        {data?.chambers && <AppoinmentChamberList chambers={data.chambers} />}
      </div>
      <div
        className="w-1/2"
      >
        <AppointmentForm {...{doctor : data}}/>
      </div>
    </div>
    </main>
    
  )
}
