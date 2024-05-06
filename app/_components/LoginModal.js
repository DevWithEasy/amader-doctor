import {
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalOverlay
} from '@chakra-ui/react'
import { useState } from "react"
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import passwordView from '../_utils/passwordView'
import handleChange from '../_utils/handleChange'
import { handleSignIn } from '../_utils/users_utils'
import { useToast } from '@chakra-ui/react'

export default function LoginModal({ view, setView }) {
    const toast = useToast()
    const { addUser,addNotifications } = useUserStore()
    const [loading, setLoading] = useState(false)
    const [type, setType] = useState('password')
    const [value, setValue] = useState({
        email: '',
        password: '',
    })

    return (
        <>
            <Modal isOpen={view} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader className='font-bangla'>লগ-ইন করুন</ModalHeader>
                    <ModalBody
                        className='space-y-3 font-bangla'
                    >
                        <div className=" space-y-1">
                            <label>আপনার ই-মেইল অথবা নাম্বার লিখুন : </label>
                            <input
                                type='email'
                                name='email'
                                onChange={(e) => handleChange(e, value, setValue)}
                                className='w-full p-2 rounded placeholder:text-sm border focus:outline-blue-500'
                            />
                        </div>

                        <div className="relative space-y-1">
                            <label>আপনার পাসওয়ার্ড লিখুন : </label>
                            <input
                                type={type}
                                name='password'
                                onChange={(e) => handleChange(e, value, setValue)}
                                className='w-full p-2 rounded placeholder:text-sm border focus:outline-blue-500'
                            />
                            <button onClick={() => passwordView(type, setType)} className='absolute right-2 bottom-3 text-gray-600'>
                                {type === 'password' ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
                            </button>
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
                                onClick={() => handleSignIn({value, addUser,addNotifications, setLoading,toast,setView})}
                                className='py-2 px-6 bg-blue-500 text-white rounded-md'
                            >
                                {loading ? 'অপেক্ষা করুন...' : 'প্রবেশ করুন'}
                            </button>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}