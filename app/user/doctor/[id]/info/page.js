'use client'

import { useEffect, useState } from "react"
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import api_url from "@/app/_utils/apiurl"
import axios from 'axios'
import { useParams } from "next/navigation"

export default function Info() {
    const [doctor, setDoctor] = useState({})
    const [value, setValue] = useState()
    const {id} = useParams()
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link'],
            ['clean']
        ],
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]
    
    async function updateDoctorInfo() {
        try {
            const res = await axios.put(`${api_url}/api/doctor/update/${doctor._id}?q=bio`, { bio: value }, {
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            })
            if (res.data.status === 200) {
                setValue(res.data.data.bio)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        async function getDoctor() {
            try {
                const res = await axios.get(`${api_url}/api/doctor/find/${id}`, {
                    headers: {
                        authorization: 'Bearer ' + localStorage.getItem('accessToken')
                    }
                })
                if (res.data.success) {
                    setDoctor(res.data.data.doctor)
                    setValue(res.data.data.doctor.bio)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getDoctor()
    }, [])
    
    return (
        <div
            className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0"
        >
            <div
                className="md:h-[calc(100vh-80px)] w-full md:w-1/2 p-4 space-y-3 border rounded overflow-y-auto"
            >
                <h2 className="pb-1 font-semibold border-b">
                    ডাক্তারের সমন্ধে বিস্তারিতঃ
                </h2>
                <div dangerouslySetInnerHTML={{ __html: value }}>

                </div>
            </div>
            <div
                className="w-full md:w-1/2"
            >
                <ReactQuill theme="snow"
                    modules={modules}
                    formats={formats}
                    value={value}
                    onChange={setValue}
                    style={{
                        height: '300px'
                    }}
                >
                </ReactQuill>
                <div
                    className="mt-20 md:mt-16"
                >
                    <button
                        onClick={updateDoctorInfo}
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        সংরক্ষন করুন
                    </button>
                </div>
            </div>

        </div>
    )
}
