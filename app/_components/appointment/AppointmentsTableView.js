import useUserStore from '@/app/_store/userStore';
import { cancelAppointment } from '@/app/_utils/appoimtments_utils';
import appointmentFiltration from '@/app/_utils/appointmentFiltration';
import AppointmentStatusBangla from '@/app/_utils/AppointmentStatusBangla';
import dayNameBangla from '@/app/_utils/dayNameBangla';
import statusColor from '@/app/_utils/statusColor'
import { toBengaliNumber } from 'bengali-number';
import { toast } from 'react-hot-toast';

const AppointmentsTableView = ({type, setView, setId }) => {
    const { user,appointments,addAppointments } = useUserStore()

    return (

        <div className="hidden md:block relative overflow-x-auto">
            <table className="w-full text-left text-gray-500">
                <thead className="bg-gray-500 text-white">
                    <tr>
                        <td className="px-4 py-2">
                            নং
                        </td>
                        <td className="px-6 py-1">
                            নাম
                        </td>
                        <td className="px-6 py-1">
                            ঠিকানা
                        </td>
                        <td className="px-6 py-1 text-center">
                            অ্যাপয়েন্টমেন্ট দিন
                        </td>
                        <td className="px-6 py-1 text-center">
                            অবস্থা
                        </td>
                        <td className="px-6 py-1 text-center">
                            বিস্তারিত
                        </td>

                    </tr>
                </thead>
                <tbody>
                    {appointments && 
                    appointmentFiltration(type,appointments)
                    .map((appointment) => 
                        <tr key={appointment._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-4 py-2">
                                {toBengaliNumber(appointment?.order)}
                            </td>
                            <td className="px-6 py-2">
                                {appointment?.name}
                            </td>
                            <td className="px-6 py-2">
                                {appointment?.address}
                            </td>
                            <td className="px-6 py-2 text-center">
                                {dayNameBangla(appointment?.appointmentDay)}
                            </td>
                            <td className={`px-6 py-2 text-center ${statusColor(appointment?.status)}`}>
                                {AppointmentStatusBangla(appointment?.status)}
                            </td>
                            <td className="flex space-x-2 justify-center px-6 py-2">
                                <button
                                    onClick={() => { setId(appointment?._id); setView(true) }}
                                    className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-500"
                                >
                                    বিস্তারিত
                                </button>
                                <button onClick={() => cancelAppointment(appointment._id, user, toast,addAppointments)} className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-500">বাতিল</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentsTableView;