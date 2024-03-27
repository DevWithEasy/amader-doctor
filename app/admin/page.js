import Heading from "../_components/Heading";
import Info from "../_components/Info";
import { FaUsers, FaRegHospital, } from 'react-icons/fa'
import { FcGraduationCap } from 'react-icons/fc'

export default function Admin() {
    const infos = [
        {
            title : 'মোট ব্যবহারকারী',
            value : '20',
            bg_color : 'bg-green-100',
            text_color : 'text-green-600',
            icon : <FaUsers size={25}/>
        },
        {
            title : 'মোট হাসপাতাল',
            value : '15',
            bg_color : 'bg-yellow-100',
            text_color : 'text-yellow-600',
            icon : <FaRegHospital size={25}/>
        },
        {
            title : 'মোট ডাক্তার',
            value : '60',
            bg_color : 'bg-blue-100',
            text_color : 'text-blue-600',
            icon : <FcGraduationCap size={25}/>
        }
    ]
    
    return (
        <div
            className=''
        >
            <Heading>
                ড্যাশবোর্ড
            </Heading>
            <div
                className='p-2 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3'
            >
                {
                    infos.map((info,i)=>
                        <Info key={i}
                            {...{
                                title : info.title,
                                value : info.value,
                                bg_color : info.bg_color,
                                text_color : info.text_color
                            }}
                        >
                            {info.icon}
                        </Info>
                    )
                }
            </div>
        </div>
    );
}
