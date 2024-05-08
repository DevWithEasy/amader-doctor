import { completeAppointment, confirmAppointment, rejectAppointment } from '@/app/_utils/appoimtments_utils';
import appointmentFiltration from '@/app/_utils/appointmentFiltration';
import AppointmentStatusBangla from '@/app/_utils/AppointmentStatusBangla';
import statusColor from '@/app/_utils/statusColor';
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuList
} from '@chakra-ui/react'

export default function DoctorAppointmentTableView({ type, appointments }) {
    return (
        <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-gray-500">
                <thead className="text-white uppercase bg-gray-500">
                    <tr>
                        <th scope="col" className="px-4 py-3">
                            নং
                        </th>
                        <th scope="col" className="px-6 py-3">
                            নাম
                        </th>
                        <th scope="col" className="px-6 py-3">
                            লিঙ্গ
                        </th>
                        <th scope="col" className="px-6 py-3 ">
                            ঠিকানা
                        </th>
                        <th scope="col" className="px-6 py-3 ">
                            অবস্থা
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            পদক্ষেপ
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.length > 0 &&
                        appointmentFiltration(type, appointments)
                            .map((appointment) => (
                                <tr
                                    key={appointment._id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <td className="px-4 py-4">{appointment?.order}</td>
                                    <td className="px-6 py-4">{appointment?.name}</td>
                                    <td className="px-6 py-4">{appointment?.gender}</td>
                                    <td className="px-6 py-4">{appointment?.address}</td>
                                    <td
                                        className={`px-6 py-4`}
                                    >
                                        <p
                                            className={`inline-block px-1 text-sm rounded  ${statusColor(appointment?.status)}`}
                                        >
                                            {AppointmentStatusBangla(appointment?.status)}
                                        </p>
                                    </td>
                                    <td className="flex space-x-2 justify-center px-6 py-4">
                                        <Menu>
                                            <MenuButton>
                                                <button
                                                    className='px-4 py-2 bg-gray-200 rounded'
                                                >
                                                    পদক্ষেপ
                                                </button>
                                            </MenuButton>
                                            <MenuList className="p-2">
                                                <MenuItem
                                                    onClick={() => {
                                                        setId(appointment?._id);
                                                        onOpen();
                                                        setView(true);
                                                    }}
                                                    className="p-2 rounded"
                                                >
                                                    বিস্তারিত
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        confirmAppointment(appointment?._id, day, date, setAppointments)
                                                    }
                                                    className="p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-300"
                                                >
                                                    নিশ্চিত
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        completeAppointment(appointment?._id, day, date, setAppointments)
                                                    }
                                                    className="p-2 rounded hover:bg-blue-500 hover:text-white transition-all duration-300"
                                                >
                                                    সফল
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        rejectAppointment(appointment?._id, day, date, setAppointments)
                                                    }
                                                    className="p-2 rounded hover:bg-red-500 hover:text-white transition-all duration-300"
                                                >
                                                    বাতিল
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </td>
                                </tr>
                            ))}
                </tbody>
            </table>
        </div>
    )
}
