'use client'
import React, { useState } from 'react'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import useUserStore from '@/app/_store/userStore';
import notificationFiltration from '@/app/_utils/notificationFiltration';
import Link from 'next/link'
import { seenNotification } from '@/app/_utils/notification_utils';

export default function Notification() {
    const [type, setType] = useState(false)
    const { notifications,readSingleNotification,readAllNotifications,deleteAllNotifications } = useUserStore()
    return (
        <div>
            <div
                className='pr-4 flex justify-end space-x-2'
            >
                <button
                    className='px-4 py-1 text-blue-500 border rounded hover:bg-blue-50'
                >
                    সকল বার্তা পঠিত
                </button>
                <button
                    className='px-4 py-1 text-red-500 border rounded hover:bg-red-50'
                >
                    সকল বার্তা ডিলিট
                </button>
            </div>
            <Tabs variant='enclosed'>
                <TabList>
                    <Tab onClick={() => setType(false)}>
                        অপঠিত বার্তা
                    </Tab>
                    <Tab onClick={() => setType(true)}>
                        পঠিত বার্তা
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <div
                            className='-ml-4 space-y-2'
                        >
                            {
                                notifications &&
                                notificationFiltration(type, notifications)
                                    .map(notification =>
                                        <Link
                                            href={notification?.path}
                                            onClick={()=>seenNotification(notification._id,readSingleNotification)}
                                            className='block p-1 border rounded'
                                        >
                                            {notification?.message}
                                        </Link>
                                    )
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>

                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}
