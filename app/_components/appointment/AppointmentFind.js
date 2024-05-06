'use client'

import { useEffect, useState } from "react"
import { CiSearch } from "react-icons/ci"
import SelectDay from "../search_find/SelectDay"
import SelectSpecialist from "../search_find/SelectSpecialist"

export default function AppointmentFind() {
    const [specializations, setSpecializations] = useState([])
    const [specialization, setSpecialization] = useState('')
    const [day, setDay] = useState('')
    const [name, setName] = useState('')

    const handleFind = () => {
        if (specialization === "" || day === "") {
            return toast({
                title: 'সার্চে ব্যর্থ হয়েছেন',
                description: "কোন অভিজ্ঞতা এবং বার নির্বাচন করেন নি।",
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
        } else {
            router.push(
                `/appointment/find?specialization=${specialization}&day=${day}`
            )
        }
    }

    useEffect(() => {
        const getSpecializations = async () => {
            try {
                const res = await axios.get(`${api_url}/api/specialist`)
                setSpecializations(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getSpecializations()
    }, [])

    return (
        <div
            className="flex flex-col items-center space-y-2"
        >
           
        </div>
    )
}
