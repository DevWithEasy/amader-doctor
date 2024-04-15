'use client'

import AddChamber from '@/app/_components/chamber/AddChamber'
import AddHospitalByUser from '@/app/_components/chamber/AddHospitalByUser'
import ChamberList from '@/app/_components/chamber/ChamberList'
import FindVanue from '@/app/_components/chamber/FindVanue'
import useServiceStore from '@/app/_store/serviceStore'
import useUserStore from '@/app/_store/userStore'
import api_url from '@/app/_utils/apiurl'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io'
import axios from 'axios'

export default function Chambers() {
    const { id } = useParams()
    const { random } = useUserStore()
    const { process, processing, chambers, addChambers } = useServiceStore()
    const [view, setView] = useState(false)
    const [vanue_view, setVanue_View] = useState(false)
    const [addVanue_view, setAddVanue_View] = useState(false)
    const [name, setName] = useState(null)
    const [location, setLocation] = useState(null)
    const [value, setValue] = useState({
        vanue: "",
        day: "",
        limit: 0,
        from: "",
        to: "",
    })
    const handleView = (name) => {
        if (name === 'add') {
            setView(true)
            setVanue_View(false)
            setAddVanue_View(false)
        } else if (name === 'vanue') {
            setView(false)
            setAddVanue_View(false)
            setTimeout(() => setVanue_View(true), 100)
        } else if (name === 'new') {
            setView(false)
            setVanue_View(false)
            setTimeout(() => setAddVanue_View(true), 100)
        }
    }
    async function getAllChambers() {
        try {
            const res = await axios.get(`${api_url}/api/chamber/${id}`, {
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            })
            if (res.data.success) {
                addChambers(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {

        getAllChambers()
    }, [])

    return (
        <div
            className='space-y-2'
        >
            <div
                className='flex justify-between items-center'
            >
                <h2 className="text-xl font-semibold">চেম্বারের তালিকা :</h2>
                <button
                    onClick={() => handleView('add')}
                    className="p-2 flex items-center space-x-1 bg-blue-500 text-white rounded-md"
                >
                    <IoMdAddCircleOutline size={22} />
                    <span>চেম্বার যোগ করুন</span>
                </button>
            </div>

            <ChamberList {...{ chambers }} />

            {view &&
                <AddChamber {...{
                    id: id, name, location,
                    value, setValue,
                    view, setView, handleView
                }} />
            }
            {vanue_view &&
                <FindVanue {...{
                    setName, setLocation, setValue,
                    vanue_view, setVanue_View, handleView
                }} />
            }
            {addVanue_view &&
                <AddHospitalByUser {...{
                    setName, setLocation, setVanue: setValue,
                    addVanue_view, setAddVanue_View, handleView
                }} />
            }
        </div>
    )
}
