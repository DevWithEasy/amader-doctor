import Pagination from '@/app/_components/Pagination';
import api_url from '@/app/_utils/apiurl';
import React from 'react'

async function getData(no) {
    const res = await fetch(`${api_url}/api/doctor/page/${no}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function DoctorPage({params}) {
    const data = await getData(params.pageNo)
    console.log(data)
    return (
        <div>
            Page {params.pageNo}
            <Pagination {...{total : 8}}/>
        </div>
    )
}
