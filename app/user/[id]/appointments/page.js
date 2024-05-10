'use client'
import AppointmentsCardView from "@/app/_components/appointment/AppointmentsCardView";
import AppointmentsTableView from "@/app/_components/appointment/AppointmentsTableView";
import AppointmentDetails from "@/app/_components/AppointmentDeatils";
import useUserStore from "@/app/_store/userStore";
import api_url from "@/app/_utils/apiurl";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from 'axios'

export default function Appointments() {
    const { id } = useParams()
    const [type, setType] = useState('uncomplete')
    const [view, setView] = useState(false)
    const { addAppointments } = useUserStore()
    const [selectId, setSelectId] = useState('')

    async function getAllAppointments() {
        try {
            const res = await axios.get(`${api_url}/api/appointment/all/${id}`, {
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            });
            addAppointments(res.data.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllAppointments()
    })

    return (
        <div className="w-full space-y-2">
            <h1 className="text-xl font-semibold text-center">আপনার অ্যাপয়েন্টমেন্ট গুলো</h1>
            <div
                className=''
            >
                <Tabs variant='enclosed'>
                    <TabList>
                        <Tab onClick={() => setType('uncomplete')}>অপেক্ষমাণ রয়েছে</Tab>
                        <Tab onClick={() => setType('complete')}>সম্পন্ন হয়েছে</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <AppointmentsTableView {...{
                                type,
                                setId: setSelectId,
                                setView
                            }} />

                            <AppointmentsCardView {...{
                                type,
                                setId: setSelectId,
                                setView
                            }} />
                        </TabPanel>
                        <TabPanel>
                            <AppointmentsTableView {...{
                                type,
                                setId: setSelectId,
                                setView
                            }} />

                            <AppointmentsCardView {...{
                                type,
                                setId: setSelectId,
                                setView
                            }} />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>

            {view &&
                <AppointmentDetails {...{
                    id: selectId,
                    view,
                    setView
                }} />
            }
        </div>
    )
}