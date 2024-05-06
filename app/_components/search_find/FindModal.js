import api_url from '@/app/_utils/apiurl'
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useToast
} from '@chakra-ui/react'
import { useEffect, useState } from "react"
import { CiSearch } from 'react-icons/ci'
import SelectSpecialist from './SelectSpecialist'
import SelectDay from './SelectDay'

export default function FindModal({ view, setView }) {
    const toast = useToast()
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
            setView(false)
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
        <>
            <Modal isOpen={view} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader className='font-bangla'>ডাক্তার খুঁজুন</ModalHeader>
                    <ModalBody
                        className='space-y-3 font-bangla'
                    >
                        <div>
                            <div
                                className="py-2 flex items-center space-x-2"
                            >
                                <SelectSpecialist {...{
                                    specializations,
                                    setSpecialization,
                                    width: true
                                }} />
                                <SelectDay {...{
                                    setDay,
                                    width: true
                                }} />
                            </div>
                            <p>অথবা</p>
                            <input
                                type='text'
                                onChange={(e) => setName(e.target.name)}
                                placeholder="নাম লিখুন..."
                                className='px-2 py-1 w-full border focus:outline-blue-500 placeholder:text-sm rounded'
                            />
                        </div>
                        <div
                            className="pb-2 flex justify-end space-x-2 font-bangla"
                        >
                            <button
                                onClick={() => setView(!view)}
                                className='py-2 px-6 bg-gray-500 text-white rounded-md'
                            >
                                বাতিল
                            </button>
                            <button
                                onClick={handleFind}
                                className='px-6 py-1.5 flex items-center space-x-2 bg-blue-500 text-white rounded'
                            >
                                <CiSearch />
                                <span>খুঁজুন</span>
                            </button>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}