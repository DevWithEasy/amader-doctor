'use client'
import dateGenerator from '@/app/_utils/dateGenerator'
import React, { useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function Appointments() {
    const [date, setDate] = useState(dateGenerator(new Date()))
    const [type, setType] = useState('complete')
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
                        <Tab>অপেক্ষমাণ রয়েছে</Tab>
                        <Tab>সম্পন্ন হয়েছে</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    )
}
