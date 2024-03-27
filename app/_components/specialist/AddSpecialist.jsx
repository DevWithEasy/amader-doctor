import useUserStore from '@/app/_store/userStore'
import api_url from '@/app/_utils/apiurl'
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useToast
} from '@chakra-ui/react'
import axios from "axios"
import { useState } from "react"
import Input from '../Input'


export default function AddSpecialist({view,setView}) {
    const toast = useToast()
    const {reload} = useUserStore()
    const [value, setValue] = useState({
        name: ''
    })

    async function addSpecialist() {
        const res = await axios.post(`${api_url}/api/specialist/`, value, {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('accessToken')
            }
        })
        if (res.data.status === 200) {
            reload()
            return toast({
                title: 'সফল হয়েছে',
                description: "নতুন অভিজ্ঞতার বিষয়টি যুক্ত হয়েছে। ",
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
        }
    }
    return (

        <>
            <Modal isOpen={view}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader className='font-bangla'>
                        বিশেষজ্ঞ বিষয় যোগ করুন
                    </ModalHeader>
                    <ModalBody>
                        <div className="p-2 space-y-2 font-bangla">
                            <Input 
                                label='বিশেষজ্ঞ বিষয় ' 
                                type='text' 
                                name='name'
                                c_value={value.name}
                                value={value} 
                                setValue={setValue} 
                                />
                        </div>
                    </ModalBody>

                    <ModalFooter className='space-x-2'>
                    <button 
                            onClick={()=>setView(!view)} 
                            className='py-2 px-6 font-bangla bg-gray-500 text-white rounded-md'
                        >
                            বাতিল
                        </button>
                        <button 
                            onClick={() => addSpecialist()} 
                            className='py-2 px-6 font-bangla bg-blue-500 text-white rounded-md'
                        >
                            নিশ্চিত করুন
                        </button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}