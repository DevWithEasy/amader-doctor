import Specializations from '@/app/_components/doctors/Specializations'
import api_url from '@/app/_utils/apiurl'
import React from 'react'

async function getData(id) {
    const res = await fetch(`${api_url}/api/doctor/search/${id}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function SpecialistDoctors({ params }) {
    const { data: { doctors, specializations } } = await getData(params.id)
    console.log(doctors)
    return (
        <main className="h-[calc(100vh-60px)] flex justify-between">
            <Specializations {...{ specializations }} />
            <div
                className="h-[calc(100vh-60px)] w-10/12 px-4 pt-2 space-y-3 overflow-y-auto"
            >
            </div>
        </main>
    )
}
