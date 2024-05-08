import appointmentFiltration from '@/app/_utils/appointmentFiltration';
import AppointmentStatusBangla from '@/app/_utils/AppointmentStatusBangla';
import dayNameBangla from '@/app/_utils/dayNameBangla';
import statusColor from '@/app/_utils/statusColor';
import { toBengaliNumber } from 'bengali-number';

export default function DoctorAppointmentCardView({ type, appointments }) {
    return (
        <div
            className='md:hidden -ml-4 space-y-2'
        >
            {
                appointments.length > 0 && 
                appointmentFiltration(type,appointments)
                .map(appointment =>
                    <div
                        key={appointment._id}
                        className='p-2 flex justify-between border rounded'
                    >
                        <div>
                            <p>{toBengaliNumber(appointment?.order)}</p>
                            <p>{appointment?.name}</p>
                            <p>
                                {appointment?.address},
                                {dayNameBangla(appointment.appointmentDay)},
                                {toBengaliNumber(appointment.appointmentDate)}
                            </p>
                            <p
                                className={`inline-block px-1 text-sm rounded  ${statusColor(appointment?.status)}`}
                            >
                                {AppointmentStatusBangla(appointment?.status)}
                            </p>
                        </div>

                        <div
                            className='flex flex-col justify-center space-y-1'
                        >
                            {appointment.status === 'Pending' &&
                                <button
                                    onClick={() => { setId(appointment?._id); setView(true) }}
                                    className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                                >
                                    নিশ্চিত
                                </button>
                            }
                            {appointment.status === 'Approved' &&
                                <button
                                    onClick={() => { setId(appointment?._id); setView(true) }}
                                    className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                                >
                                    সফল
                                </button>
                            }
                            <button onClick={() => cancelAppointment(appointment._id, user, toast, setAppointments)} className="px-2 py-1 bg-slate-500 text-white rounded hover:bg-slate-600">বাতিল</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
