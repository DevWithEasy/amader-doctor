import Pagination from '@/app/_components/Pagination'
import api_url from '@/app/_utils/apiurl'
import randomParam from '@/app/_utils/randomParam'
import React from 'react'

async function getData(no) {
    const res = await fetch(`${api_url}/api/doctor/page/${no}?${randomParam}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function DoctorPage({params}) {
    const data = await getData(params.pageNo)
    console.log(data)
    return (
        <div className="h-[calc(100vh-60px)] flex justify-between">
            Page {params.pageNo}
            <Pagination {...{total : 8 ,page : Number(params.pageNo)}}/>
        </div>
    )
}
