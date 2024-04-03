import axios from "axios"
import { useState } from "react"
import { useParams,useRouter } from 'next/navigation'
import useServiceStore from "@/app/_store/serviceStore"
import useUserStore from "@/app/_store/userStore"

export default function UpdateSpecialist() {
    const router = useRouter()
    const { id } = useParams()
    const { specialists, process, processing } = useServiceStore()
    const { reload } = useUserStore()
    const [value, setValue] = useState(specialists.find(s => s._id === id))

    async function updateSpecialist() {
        processing(true)
        try {
            const res = await axios.put(`${api_url}/api/specialist/${value._id}`, value, {
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            })
            if (res.data.status === 200) {
                processing(false)
                reload()
                router.push('/admin/specialists')
            }
        } catch {
            processing(false)
            toast.success('Something went wrong.')
        }
    }
    return (
        <div
            className="h-full overflow-y-auto"
        >
            <Heading>
                বিশেষজ্ঞ বিষয় আপডেট
            </Heading>
            <div
                className='p-2 space-y-2'
            >
                <Input {...{
                    label: 'বিশেষজ্ঞ বিষয়',
                    name: 'name',
                    c_value: value?.name,
                    value, setValue
                }} />
                <button
                    onClick={() => updateSpecialist()}
                    className='py-2 px-6 font-bangla bg-green-400 text-white rounded-md'
                >
                    {process ? 'কাজ হচ্ছে...' : 'নিশ্চিত'}
                </button>
            </div>

        </div>
    )
}