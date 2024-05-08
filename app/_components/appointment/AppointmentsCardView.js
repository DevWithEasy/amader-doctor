import useUserStore from '@/app/_store/userStore';
import { cancelAppointment } from '@/app/_utils/appoimtments_utils';
import AppointmentStatusBangla from '@/app/_utils/AppointmentStatusBangla';
import { toBengaliNumber } from 'bengali-number';
import dayNameBangla from '@/app/_utils/dayNameBangla';
import { toast } from 'react-hot-toast';

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
                        className='p-2 border-b'
                    >
                        <p>{appointment?.name}</p>
                        <p>
                            {appointment?.address},
                            {dayNameBangla(appointment.appointmentDay)},
                            {toBengaliNumber(appointment.appointmentDate)}
                        </p>
                        <p>{appointment?.order}</p>
                        <div
                            className='pt-2 flex justify-end space-x-2'
                        >
                            <button
                                onClick={() => { setId(appointment?._id); setView(true) }}
                                className="px-2 py-1 bg-green-400 text-white rounded hover:bg-green-500"
                            >
                                বিস্তারিত
                            </button>
                            <button onClick={() => cancelAppointment(appointment._id, user, toast, setAppointments)} className="px-2 py-1 bg-red-400 text-white rounded hover:bg-red-500">বাতিল</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default AppointmentsCardView;