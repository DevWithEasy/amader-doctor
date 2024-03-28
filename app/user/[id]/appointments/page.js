'use client'
import AppointmentsCardView from "@/app/_components/appointment/AppointmentsCardView";
import AppointmentsTableView from "@/app/_components/appointment/AppointmentsTableView";
import AppointmentDetails from "@/app/_components/AppointmentDeatils";
import useUserStore from "@/app/_store/userStore";
import { getAllAppointments } from "@/app/_utils/appoimtments_utils";
import { useEffect, useState } from "react";

export default function Appointments() {
    const [view, setView] = useState(false)
    const { user } = useUserStore()
    const [id, setId] = useState('')
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        getAllAppointments(user?._id, setAppointments)
    }, [user?._id])

    return (
        <div className="w-full space-y-2">
            <h1 className="p-2 text-xl font-semibold text-center border-b">আপনার অ্যাপয়েন্টমেন্ট গুলো</h1>
            <AppointmentsTableView {...{
                appointments,
                setAppointments,
                setId,
                setView
            }} />

            <AppointmentsCardView {...{
                appointments,
                setAppointments,
                setId,
                setView
            }} />

            {view &&
                <AppointmentDetails {...{
                    id,
                    view,
                    setView
                }} />
            }
        </div>
    )
}