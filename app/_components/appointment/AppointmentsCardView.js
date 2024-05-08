import useUserStore from '@/app/_store/userStore';
import { cancelAppointment } from '@/app/_utils/appoimtments_utils';
import AppointmentStatusBangla from '@/app/_utils/AppointmentStatusBangla';
import { toBengaliNumber } from 'bengali-number';
import dayNameBangla from '@/app/_utils/dayNameBangla';
import { toast } from 'react-hot-toast';
import statusColor from '@/app/_utils/statusColor';

const AppointmentsCardView = ({ type, setView, setId }) => {
    const { user, appointments } = useUserStore()
    return (
        <div
            className='md:hidden -ml-4 space-y-2'
        >
            {
                appointments && appointments.map(appointment =>
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
                            <button
                                onClick={() => { setId(appointment?._id); setView(true) }}
                                className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                            >
                                বিস্তারিত
                            </button>
                            <button onClick={() => cancelAppointment(appointment._id, user, toast, setAppointments)} className="px-2 py-1 bg-slate-500 text-white rounded hover:bg-slate-600">বাতিল</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default AppointmentsCardView;