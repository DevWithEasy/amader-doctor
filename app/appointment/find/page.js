'use client'
import {useSearchParams} from 'next/navigation'

export default function Page() {
    const searchParams = useSearchParams()
    const specialization = searchParams.get('specialization')
    const day = searchParams.get('day')
    console.log(specialization,day)
    return (
        <div>Find</div>
    )
}
