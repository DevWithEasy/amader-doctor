import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Spinner,
    useDisclosure,
} from '@chakra-ui/react'
import { useState } from "react"
import { BiImageAdd } from "react-icons/bi"
import { FiUploadCloud } from 'react-icons/fi'
import useUserStore from '../_store/userStore'
import Image from 'next/image'
import { uploadPhoto } from '../_utils/users_utils'

export default function Upload(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [loading, setLoading] = useState(false)
    const { user, reload } = useUserStore()
    const [file, setFile] = useState()
    const [image, setImage] = useState()
    const handleFile = (e) => {
        setFile(e.target.files[0])
        const fileReader = new FileReader()
        fileReader.onload = (e) => {
            setImage(e.target.result)
        }
        fileReader.readAsDataURL(e.target.files[0])
    }

    return (
        <>
            <button
                onClick={onOpen}
                className="flex items-center px-4 py-1 space-x-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
                {/* <BiImageAdd size={20} /> */}
                <span>ছবি পরিবর্তন</span>
            </button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader className='font-bangla'>প্রোফাইলের ছবি আপলোড করুন</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        className='font-bangla'
                    >
                        {image &&
                            <Image
                                src={image}
                                alt='user_image'
                                height={250}
                                width={250}
                                className="h-[250px] mx-auto rounded-md"
                            />
                        }
                        <label htmlFor="image" className="flex justify-center items-center my-2 p-2 space-x-3 border-2 border-dashed rounded-md cursor-pointer">
                            <FiUploadCloud size={30} />
                            <p className="text-center">
                                <span className='font-semibold text-blue-500'>ছবি বাছাই করুন </span>
                                <br />
                                <span className="text-gray-500 text-sm">jpg,jpeg,png এই ফরমেটের ছবি আপলোড করতে পারবেন।</span>
                            </p>
                        </label>
                        <input type="file" id="image" onChange={(e) => handleFile(e)} className='hidden' />
                        {!loading && <div className="flex justify-center items-center py-2">
                            <button
                                onClick={() => uploadPhoto(user, file, reload, setLoading, toast)}
                                className="flex items-center px-6 py-1 space-x-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                            >
                                <BiImageAdd size={20} />
                                <span>আপলোড করুন</span>
                            </button>
                        </div>}
                        {/* file upload processing animation */}
                        {loading && <div className="flex justify-center items-center">
                            <button className="flex items-center space-x-2 bg-indigo-500 text-white px-4 py-2 rounded-md">
                                <Spinner />
                                <span>আপলোড হচ্ছে...</span>
                            </button>
                        </div>}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}