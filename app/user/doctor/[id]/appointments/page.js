'use client'
import DoctorAppointmentCardView from '@/app/_components/appointment/doctor/DoctorAppointmentCardView'
import DoctorAppointmentTableView from '@/app/_components/appointment/doctor/DoctorAppointmentTableView'
import { getDoctorAppointments } from '@/app/_utils/appoimtments_utils'
import dateGenerator from '@/app/_utils/dateGenerator'
import {
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'


export default function Appointments() {
    const queryParams = new URLSearchParams(window.location.search)
    const queryDate = queryParams.get('date')
    const [date, setDate] = useState(queryDate ? dateGenerator(new Date(queryDate)) : dateGenerator(new Date()))
    const [type, setType] = useState('uncomplete')
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        getDoctorAppointments(date, setAppointments)
    }, [date])

    return (
        <div
            className='space-y-2'
        >
            <div>
                <input
                    type='date'
                    value={date}
                    onChange={(e) => setDate(dateGenerator(e.target.value))}
                    className='p-2 border focus:outline-blue-500 rounded'
                />
            </div>
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
                            <DoctorAppointmentTableView {...{
                                type,
                                appointments
                            }} />
                            <DoctorAppointmentCardView {...{
                                type,
                                appointments
                            }} />
                        </TabPanel>
                        <TabPanel>
                            <DoctorAppointmentTableView {...{
                                type,
                                appointments
                            }} />
                            <DoctorAppointmentCardView {...{
                                type,
                                appointments
                            }} />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    )
}
